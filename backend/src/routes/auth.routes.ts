import {
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/auth.controllers';
import express from 'express';
import type { Router } from 'express';

export const authRouter: Router = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);
