import express from 'express';
import type { Router, Request, Response } from 'express';
import type { Pet } from '../data/pets';
import { pets } from '../data/pets';
const petRouter: Router = express.Router();

type PetQueryParams = {
  species?: string;
  sold?: 'true' | 'false';
  breed?: string;
  age?: string;
  minAge?: string;
  maxAge?: string;
};

petRouter.get(
  '/',
  (
    req: Request<{}, unknown, {}, PetQueryParams>,
    res: Response<Pet[]>
  ): void => {
    const { species, sold, breed, age, minAge, maxAge } = req.query;
    let filteredPets: Pet[] = pets;
    if (species) {
      filteredPets = filteredPets.filter(
        (pet: Pet): boolean =>
          pet.species.toLowerCase() === species.toLowerCase()
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
  }
);

petRouter.get(
  '/:id',
  (
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
  }
);
