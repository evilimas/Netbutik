import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { PetQ } from '../types/petTypes';
import { addToCart } from '../services/cartServices';
import { useCartCount } from '../context/cartCountContext';

export default function Pet() {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState<PetQ | null>(null);
  const { cartCount: cartCountValue, setCartCount } = useCartCount();

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/pets/${id}`);
        setPetDetails(response.data);
        console.log('Pet details:', response.data);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [id]);

  const handleAddToCart = async (pet: PetQ, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    await addToCart(pet.id);
    console.log('Added to cart:', pet.name, pet.id);
    setCartCount(cartCountValue + 1);
  };

  const status = petDetails?.sold ? 'Sold' : 'In Stock';
  const price = petDetails?.newPrice ? petDetails.newPrice : petDetails?.price;

  return (
    <>
      <div className="pet-component">
        <div className="pet-header">
          <h2>Pet Details</h2>
          <p>Here you can find details about a specific pet!</p>
        </div>

        <div className="pet-details">
          <div className="left-section">
            <img
              className="pet-img"
              src={petDetails?.photo}
              alt={petDetails?.name}
              width="200"
            />
          </div>
          <div className="right-section">
            <div className="top">
              <p className={petDetails?.sold ? 'sold' : 'in-stock'}>{status}</p>
              <button onClick={(event) => handleAddToCart(petDetails!, event)}>
                ADD TO CART
              </button>
            </div>
            <h1> {petDetails?.name}</h1>
            {petDetails?.newPrice ? (
              <h2 className="old-price">${petDetails.price}.00</h2>
            ) : null}
            <h3 className={`price ${petDetails?.newPrice ? 'margin-top' : ''}`}>
              ${price}.00
            </h3>
            <p className="description">{petDetails?.description}</p>
            <div className="petDetails">
              <h3>Pet Details</h3>
              <p>
                <span>Species:</span> {petDetails?.species}
              </p>
              <p>
                <span>Breed:</span> {petDetails?.breed}
              </p>
              <p>
                <span>Age:</span> {petDetails?.age} years
              </p>
            </div>

            <div className="bottom">
              <h3>Medical Record</h3>
              <p>
                <span>Weight:</span> {petDetails?.weightKg} kg
              </p>

              <p>
                <span>
                  Vaccinations:{' '}
                  <span className="vaccine">{petDetails?.vaccinations}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
