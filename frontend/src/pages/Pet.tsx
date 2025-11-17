import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Pet } from '../types/petTypes';

function Pet() {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState<Pet | null>(null);

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
            <h2>Name: {petDetails?.name}</h2>
            <p>Species: {petDetails?.species}</p>
            <p>Breed: {petDetails?.breed}</p>
            <p>Age: {petDetails?.age} years</p>
            <h3>Price: ${petDetails?.price}</h3>
            <p>Description: {petDetails?.description}</p>
            <div className="bottom">
              <h3>Medical Record</h3>
              <p>Weight: {petDetails?.medicalRecord.weightKg} kg</p>

              <p>Vaccinations:</p>
              <ul>
                {petDetails?.medicalRecord.vaccinations.map((vacine) => {
                  return <li key={vacine}>{vacine}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pet;
