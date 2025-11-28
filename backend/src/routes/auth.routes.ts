import { registerUser } from '../controllers/auth.controllers';
import express from 'express';
import type { Router } from 'express';

export const authRouter: Router = express.Router();

authRouter.post('/register', registerUser);
