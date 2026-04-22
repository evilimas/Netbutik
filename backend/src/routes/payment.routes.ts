import express from 'express';
import { createPaymentIntent } from '../controllers/payment.controllers';
import { requireAuth } from '../middleware/requireAuth';

export const paymentRouter = express.Router();

paymentRouter.post('/create-payment-intent', requireAuth, createPaymentIntent);
