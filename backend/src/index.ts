import express from 'express';
import type { Express, Request, Response } from 'express';
import cors from 'cors';
import { petRouter } from './routes/pets.routes';
import { authRouter } from './routes/auth.routes';
import session from 'express-session';
import { meRouter } from './routes/me.routes';
import { cartRouter } from './routes/cart.routes';

const PORT = process.env.PORT || 8000;
const app: Express = express();
const secret = process.env.SPIRAL_SESSION_SECRET || 'default_secret';

app.use(express.json());

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    },
  }),
);
app.use(
  cors({
    origin: 'http://localhost:5173', //  frontend URL
    credentials: true, // Allow credentials
  }),
);
app.use('/pets/auth/me', meRouter);
app.use('/pets/auth', authRouter);
app.use('/pets/cart', cartRouter);
app.use('/pets', petRouter);

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
