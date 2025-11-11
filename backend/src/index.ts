import express from 'express';
import type { Express, Request, Response } from 'express';
import type { Pet } from './data/pets';
import cors from 'cors';
import { pets } from './data/pets';

const PORT = process.env.PORT || 8000;
const app: Express = express();

app.use(cors());

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
