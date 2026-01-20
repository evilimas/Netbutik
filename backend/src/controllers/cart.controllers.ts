import { getDBConnection } from '../db/db';
import type { Request, Response } from 'express';

type CartItem = {
  cartItemId: number;
  quantity: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  price: number;
};

export async function addToCart(
  req: Request & { session: { userId?: number } },
  res: Response<{ message: string } | void>
) {
  const db = await getDBConnection();

  const petId = parseInt(req.body.petId);

  if (isNaN(petId)) {
    return res.status(400).json({ message: 'Invalid pet ID' });
  }
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ message: 'Not autenticated' });
  }

  const existing = await db.get(
    'SELECT * from cart_items WHERE user_id = ? AND pet_id = ?',
    [userId, petId]
  );

  if (existing) {
    await db.run('UPDATE cart_items SET quantity = quantity + 1 WHERE id = ?', [
      existing.id,
    ]);
  } else {
    await db.run(
      'INSERT INTO cart_items (user_id, pet_id, quantity) VALUES (?,?,1)',
      [userId, petId]
    );
  }
  res.json({ message: 'Pet added to cart' });
}

export async function getCartCount(
  req: Request & { session: { userId?: number } },
  res: Response<{ count: number | null } | { message: string }>
) {
  const db = await getDBConnection();
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ message: 'Not autenticated' });
  }
  const result = await db.get(
    `SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`,
    [userId]
  );

  res.json({ count: result.totalItems || 0 });
}

export async function getAll(
  req: Request & { session: { userId?: number } },
  res: Response<{ items: CartItem[] } | { message: string }>
) {
  const db = await getDBConnection();
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ message: 'Not autenticated' });
  }
  const items = await db.all(
    `SELECT ci.id AS cartItemId, ci.quantity, p.name, p.species, p.breed, p.age, p.price
    FROM cart_items ci
    JOIN pets p ON p.id = ci.pet_id
    WHERE ci.user_id = ?`,
    [userId]
  );

  res.json({ items: items });
}
