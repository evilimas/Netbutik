import express from 'express';
import type { Router } from 'express';
import {
  getPets,
  getPetById,
  getBreeds,
  getSpecies,
} from '../controllers/pets.controllers';
import { validateNumericId } from '../middleware/pets.middleware';
export const petRouter: Router = express.Router();

petRouter.get('/', getPets);

petRouter.get('/breeds', getBreeds);

petRouter.get('/species', getSpecies);

petRouter.get('/:id', validateNumericId, getPetById);
