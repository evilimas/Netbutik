import express from 'express';
import {
  addToCart,
  getCartCount,
  getAll,
  deleteAll,
  deleteItem,
} from '../controllers/cart.controllers';
import type { Router } from 'express';

export const cartRouter: Router = express.Router();
cartRouter.post('/add', addToCart);
cartRouter.get('/cart-count', getCartCount);
cartRouter.get('/', getAll);
cartRouter.delete('/all', deleteAll);
cartRouter.delete('/:cartItemId', deleteItem);
