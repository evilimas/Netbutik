import type { Request, Response } from 'express';
import type { Pet } from '../data/pets';
import { pets } from '../data/pets';
import { getDBConection } from '../db/db';

type PetQueryParams = {
  species?: string;
  sold?: 'true' | 'false';
  breed?: string;
  age?: string;
  minAge?: string;
  maxAge?: string;
};

export const getPets = (
  req: Request<{}, unknown, {}, PetQueryParams>,
  res: Response<Pet[]>
): void => {
  const { species, sold, breed, age, minAge, maxAge } = req.query;
  let filteredPets: Pet[] = pets;
  if (species) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.species.toLowerCase() === species.toLowerCase()
    );
  }
  if (breed) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.breed.toLowerCase() === breed.toLowerCase()
    );
  }
  if (age) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.age.toString() === age
    );
  }
  if (sold) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.sold === JSON.parse(sold)
    );
  }
  if (minAge) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.age >= parseInt(minAge)
    );
  }
  if (maxAge) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.age <= parseInt(maxAge)
    );
  }
  res.json(filteredPets);
};

export const getPetById = (
  req: Request<{ id: string }>,
  res: Response<Pet | { message: string }>
): void => {
  const { id } = req.params;
  const pet: Pet | undefined = pets.find(
    (pet: Pet): boolean => pet.id.toString() === id
  );
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
};

export const getBreeds = async (req: Request, res: Response): Promise<void> => {
  try {
    const db = await getDBConection();
    const breedRows = await db.all('SELECT DISTINCT breed from pets');
    console.log(breedRows);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch breeds',
      details: (error as Error).message,
    });
  }
};

export const getSpecies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = await getDBConection();
    const speciesRows = await db.all('SELECT DISTINCT species from pets');
    console.log(speciesRows);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch species',
      details: (error as Error).message,
    });
  }
};
