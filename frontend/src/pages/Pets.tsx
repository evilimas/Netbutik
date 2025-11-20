import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import type { Pet } from '../types/petTypes';

function Pets() {
  const [data, setData] = useState<Pet[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<{ species?: string; search?: string }>(
    {}
  );

  const handleAddToCart = (pet: Pet, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Added to cart:', pet.name);
    // Add your cart logic here
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(filters);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/pets?${queryParams.toString()}`
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
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <>
      <div className="pet-section">
        <div className="pet-heading">
          <h2>Pets Page</h2>
          <p>Here you can find all our lovely pets!</p>
        </div>
        <div className="filters">
          View by species:
          <select
            value={filters.species || 'all'}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                species: e.target.value === 'all' ? undefined : e.target.value,
              }))
            }
          >
            <option value="">All</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="bird">Birds</option>
            <option value="rabbit">Rabbits</option>
          </select>
          <input type="text" placeholder="search" />
        </div>
        <div className="pet-list">
          {data && data.length > 0 ? (
            <>
              {data.map((pet: Pet) => (
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
      </div>
    </>
  );
}

export default Pets;
