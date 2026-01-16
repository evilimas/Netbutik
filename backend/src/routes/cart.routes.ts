import express from 'express';
import { addToCart } from '../controllers/cart.controllers';
import type { Router } from 'express';

export const cartRouter: Router = express.Router();
cartRouter.post('/add', addToCart);
