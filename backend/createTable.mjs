import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function createTable() {
  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite3.Database,
  });
  await db.exec(`
        CREATE TABLE IF NOT EXISTS pets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            species TEXT NOT NULL,
            breed TEXT NOT NULL,
            age INTEGER NOT NULL,
            price REAL NOT NULL,
            newPrice REAL,
            description TEXT NOT NULL,
            photo TEXT NOT NULL,
            sold BOOLEAN NOT NULL DEFAULT 0,
            onSale BOOLEAN DEFAULT 0,
            vaccinations TEXT NOT NULL,
            weightKg REAL NOT NULL,
            microchipId TEXT
        )
    `);

  await db.close();
}
createTable();

// export type PetType = {
//   id: number;
//   name: string;
//   species: string;
//   breed: string;
//   age: number;
//   price: number;
//   newPrice?: number;
//   description: string;
//   photo: string;
//   sold: boolean;
//   onSale?: boolean;
//   vaccinations: string;
//   weightKg: number;
//   microchipId: string | null;
// };
