import { getCurrentUser } from '../controllers/me.controllers';
import express from 'express';
import type { Router } from 'express';

export const meRouter: Router = express.Router();

meRouter.get('/current', getCurrentUser);
