import type { Request, Response } from 'express';

import { getDBConection } from '../db/db';

type PetQueryParams = {
  species?: string;
  sold?: 'true' | 'false';
  breed?: string;
  age?: string;
  minAge?: string;
  maxAge?: string;
  search?: string;
};

export const getPets = async (
  req: Request<{}, unknown, {}, PetQueryParams>,
  res: Response
): Promise<void> => {
  try {
    const db = await getDBConection();
    let query = 'SELECT * FROM pets';
    let params: string[] = [];

    const { species, sold, breed, search, age, minAge, maxAge } = req.query;

    if (species) {
      query += ` WHERE species = ?`;
      params.push(species);
    }
    if (breed) {
      query += ` WHERE breed = ?`;
      params.push(breed);
    }
    if (sold) {
      query += ` WHERE sold = ?`;
      params.push(sold);
    }
    if (search) {
      query += ` WHERE name LIKE ? OR breed LIKE ? OR species LIKE ?`;
      const searchPattern = `%${search}%`;
      params.push(searchPattern, searchPattern, searchPattern);
    }

    const pets = await db.all(query, params);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }

  // let filteredPets: Pet[] = pets;
  // if (species) {
  //   filteredPets = filteredPets.filter(
  //     (pet: Pet): boolean => pet.species.toLowerCase() === species.toLowerCase()
  //   );
  // }
  // if (breed) {
  //   filteredPets = filteredPets.filter(
  //     (pet: Pet): boolean => pet.breed.toLowerCase() === breed.toLowerCase()
  //   );
  // }
  // if (age) {
  //   filteredPets = filteredPets.filter(
  //     (pet: Pet): boolean => pet.age.toString() === age
  //   );
  // }
  // if (sold) {
  //   filteredPets = filteredPets.filter(
  //     (pet: Pet): boolean => pet.sold === JSON.parse(sold)
  //   );
  // }
  // if (minAge) {
  //   filteredPets = filteredPets.filter(
  //     (pet: Pet): boolean => pet.age >= parseInt(minAge)
  //   );
  // }
  // if (maxAge) {
  //   filteredPets = filteredPets.filter(
  //     (pet: Pet): boolean => pet.age <= parseInt(maxAge)
  //   );
  // }
  // res.json(filteredPets);
};

export const getPetById = async (
  req: Request<{ id: string }>,
  res: Response<{ message: string }>
): Promise<void> => {
  const { id } = req.params;

  try {
    const db = await getDBConection();
    const pet = await db.get('SELECT * FROM pets WHERE id = ?', [id]);
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'failed to fetch pet with id ' + id });
  }
  // const pet: Pet | undefined = pets.find(
  //   (pet: Pet): boolean => pet.id.toString() === id
  // );
  // if (pet) {
  //   res.json(pet);
  // } else {
  //   res.status(404).json({ message: 'Pet not found' });
  // }
};

export const getBreeds = async (
  req: Request,
  res: Response<string[] | { error: string; details: string }>
): Promise<void> => {
  try {
    const db = await getDBConection();
    const breedRows = await db.all('SELECT DISTINCT breed from pets');
    const breeds = breedRows.map((row) => row.breed);
    res.json(breeds);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch breeds',
      details: (error as Error).message,
    });
  }
};

export const getSpecies = async (
  req: Request,
  res: Response<string[] | { error: string; details: string }>
): Promise<void> => {
  try {
    const db = await getDBConection();
    const speciesRows = await db.all('SELECT DISTINCT species from pets');
    const species = speciesRows.map((row) => row.species);
    res.json(species);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch species',
      details: (error as Error).message,
    });
  }
};
