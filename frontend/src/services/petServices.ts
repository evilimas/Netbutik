import axios from 'axios';

export const breeds = async () => {
  try {
    const data = await fetch('http://localhost:8000/pets/breeds');
    const breedsList = await data.json();
    return breedsList;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    return [];
  }
};

export const species = async () => {
  try {
    const response = await axios.get('http://localhost:8000/pets/species');
    return response.data;
  } catch (error) {
    console.error('Error fetching species:', error);
    return [];
  }
};

export const pets = async () => {
  try {
    const response = await axios.get('http://localhost:8000/pets/');
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    return [];
  }
};
