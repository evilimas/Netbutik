import sqlite from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';
import { petsData } from './src/data/petsData.mjs';

async function seedTable() {
  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite.Database,
  });

  try {
    for (const {
      id,
      name,
      species,
      breed,
      age,
      price,
      newPrice,
      description,
      photo,
      sold,
      onSale,
      vaccinations,
      weightKg,
      microchipId,
    } of petsData) {
      await db.run(
        `
        INSERT INTO pets (id, name, species, breed, age, price, newPrice, description, photo, sold, onSale, vaccinations, weightKg, microchipId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          id,
          name,
          species,
          breed,
          age,
          price,
          newPrice,
          description,
          photo,
          sold,
          onSale,
          vaccinations,
          weightKg,
          microchipId,
        ]
      );
    }
    console.log('Seeding completed.');
  } catch (error) {
    await db.exec('ROOLBACK');
    console.error('Error seeding data:', error);
  } finally {
    await db.close();
    console.log('Database connection closed.');
  }
}

seedTable();
