import type { Request, Response } from 'express';
import type { Pet } from '../data/pets';
import { pets } from '../data/pets';

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
