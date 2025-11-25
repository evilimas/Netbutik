import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import type { Pet } from '../types/petTypes';

function Pets() {
  const [allPets, setAllPets] = useState<Pet[] | null>(null);
  const [filteredPets, setFilteredPets] = useState<Pet[] | null>(allPets);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<{
    species?: string;
    breed?: string;
    search?: string;
  }>({});

  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  // Helper functions for dropdown options
  const getUniqueSpecies = () => {
    if (!allPets) return [];

    const species: string[] = [];
    allPets.forEach((pet) => {
      if (!species.includes(pet.species)) {
        species.push(pet.species);
      }
    });
    return species;
  };

  const getUniqueBreeds = () => {
    if (!allPets) return [];

    let petsToCheck = allPets;

    if (filters.species) {
      petsToCheck = allPets.filter((pet) => pet.species === filters.species);
    }

    const breeds: string[] = [];
    petsToCheck.forEach((pet) => {
      if (!breeds.includes(pet.breed)) {
        breeds.push(pet.breed);
      }
    });
    return breeds;
  };

  const uniqueSpecies = getUniqueSpecies();
  const uniqueBreeds = getUniqueBreeds();

  // pagination logic
  const totalPages = filteredPets
    ? Math.ceil(filteredPets.length / itemsPerPage)
    : 0;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPets
    ? filteredPets.slice(indexOfFirstItem, indexOfLastItem)
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
  };

  //  fetch all pets
  useEffect(() => {
    const fetchAllPets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/pets/');
        setAllPets(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPets();
  }, []);

  // filter pets whenever filters change
  useEffect(() => {
    function filterPets(
      allPets: Pet[],
      filters: { species?: string; breed?: string; search?: string }
    ): Pet[] {
      let result = allPets;

      if (filters.species) {
        result = result.filter((pet) => pet.species === filters.species);
      }

      if (filters.breed) {
        result = result.filter((pet) => pet.breed === filters.breed);
      }

      if (filters.search) {
        result = result.filter((pet) =>
          pet.name
            .toLocaleLowerCase()
            .includes(filters.search?.toLocaleLowerCase() || '')
        );
      }

      return result;
    }

    if (allPets) {
      const filtered = filterPets(allPets, filters);
      setFilteredPets(filtered);
    }
    setPage(1);
  }, [filters, allPets]);

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

        <div className="select-inputs filters">
          <div className="species-filter">
            <p>View by species:</p>
            <select
              value={filters.species || ''}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  species: e.target.value || undefined,
                  breed: undefined,
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
          </div>
          <div className="breed-filter">
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
          <div className="pet-per-page">
            <p>Pets per page: </p>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              {[12, 18, 24, 36, 48].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="search by name"
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
          {filteredPets && filteredPets.length > 0 ? (
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
