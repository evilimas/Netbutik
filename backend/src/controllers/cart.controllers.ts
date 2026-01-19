import { getDBConnection } from '../db/db';
import type { Request, Response } from 'express';

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
