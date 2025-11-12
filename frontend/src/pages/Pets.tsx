import { useEffect, useState } from 'react';
import axios from 'axios';

function Pets() {
  type Pet = {
    id: number;
    name: string;
    species: string;
    breed: string;
    age: number;
    price: number;
    medicalRecord: MedicalRecord;
    photo: string;
    sold: boolean;
  };
  type MedicalRecord = {
    vaccinations: string[];
    weightKg: number;
    microchipId: string | null;
  };
  const [data, setData] = useState<Pet[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/pets');
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h2>Pets Page</h2>
      <p>Here you can find all our lovely pets!</p>

      <div>
        {data && data.length > 0 ? (
          <>
            {data.map((pet: Pet) => (
              <div className="pet" key={pet.id}>
                <p>{pet.name}</p>
                <img src={pet.photo} alt={pet.name} width="200" />
              </div>
            ))}
          </>
        ) : (
          <p>No pets found.</p>
        )}
      </div>
    </>
  );
}

export default Pets;
