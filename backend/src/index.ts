import express from 'express';
import type { Express, Request, Response } from 'express';
import cors from 'cors';
import { petRouter } from './routes/pets.routes';
import { authRouter } from './routes/auth.routes';
import session from 'express-session';

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
  })
);
app.use(cors());
app.use('/pets', petRouter);
app.use('/pets/auth', authRouter);

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
