import express from 'express';
import {
  addToCart,
  getCartCount,
  getAll,
  deleteAll,
  deleteItem,
} from '../controllers/cart.controllers';
import type { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth';

export const cartRouter: Router = express.Router();
cartRouter.post('/add', requireAuth, addToCart);
cartRouter.get('/cart-count', requireAuth, getCartCount);
cartRouter.get('/', requireAuth, getAll);
cartRouter.delete('/all', requireAuth, deleteAll);
cartRouter.delete('/:cartItemId', requireAuth, deleteItem);
