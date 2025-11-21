import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import type { Pet } from '../types/petTypes';

function Pets() {
  const [data, setData] = useState<Pet[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<{
    species?: string;
    breed?: string;
    search?: string;
  }>({});
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  // Get unique species and breeds from data
  const uniqueSpecies = data
    ? [...new Set(data.map((pet) => pet.species))]
    : [];
  const uniqueBreeds = data ? [...new Set(data.map((pet) => pet.breed))] : [];

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber: number) => setPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleAddToCart = (pet: Pet, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Added to cart:', pet.name);
    // Add your cart logic here
  };

  useEffect(() => {
    // Clean filters object - remove undefined values
    // const cleanFilters: Record<string, string> = {};
    // Object.entries(filters).forEach(([key, value]) => {
    //   if (value !== undefined && value !== '') {
    //     cleanFilters[key] = value;
    //   }
    // });

    const queryParams = new URLSearchParams(filters);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/pets/?${queryParams}`
        );
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  // if (loading) return <p className="loading">Loading...</p>;
  // if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <>
      <div className="pet-section">
        <div className="pet-heading">
          <h2>Pets Page</h2>
          <p>Here you can find all our lovely pets!</p>
        </div>
        <div className="loading-container">
          {loading && <p className="loading">Loading...</p>}
        </div>
        <div className="error-container">
          {error && <p className="error">Error: {error.message}</p>}
        </div>
        <div className="filters">
          <div className="select-inputs">
            View by species:
            <select
              value={filters.species || ''}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  species: e.target.value || undefined,
                }))
              }
            >
              <option value="">All Species</option>
              {uniqueSpecies.map((species) => (
                <option key={species} value={species}>
                  {species.charAt(0).toUpperCase() + species.slice(1)}s
                </option>
              ))}
            </select>
            <p>View by breed:</p>
            <select
              value={filters.breed || ''}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  breed: e.target.value || undefined,
                }))
              }
            >
              <option value="">All Breeds</option>
              {uniqueBreeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="search"
              value={filters.search || ''}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  search: e.target.value || undefined,
                }))
              }
            />
          </div>
        </div>
        <div className="pet-list">
          {data && data.length > 0 ? (
            <>
              {currentItems.map((pet: Pet) => (
                <div className="pet" key={pet.id}>
                  <Link to={`/pets/${pet.id}`}>
                    <img
                      className="pet-img"
                      src={pet.photo}
                      alt={pet.name}
                      width="200"
                    />
                    <div className="first-line">
                      <p>{pet.name}</p>
                      <p>${pet.price}</p>
                    </div>
                    <div className="second-line">
                      <p>{pet.species}</p>
                      <p>Breed: {pet.breed}</p>
                    </div>
                    <div className="third-line">
                      <p>{pet.description}</p>
                    </div>
                  </Link>
                  <button
                    onClick={(e) => handleAddToCart(pet, e)}
                    className="cart-button"
                  >
                    <img
                      className="cart"
                      src="/images/cart.png"
                      alt="Add to cart"
                    />
                  </button>
                </div>
              ))}
            </>
          ) : (
            <p>No pets found.</p>
          )}
        </div>
        {/* Pagination controls */}
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className={page === number ? 'active' : ''}>
                <button onClick={() => paginate(number)}>{number}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pets;
