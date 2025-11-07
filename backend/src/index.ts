import express from 'express';
import type { Express } from 'express';

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
