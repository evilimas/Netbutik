import { getDBConnection } from '../db/db.js';
import type { Request, Response } from 'express';

export async function addToCart(
  req: Request & { session: { userId: number } },
  res: Response<{ message: string } | void>
) {
  const db = await getDBConnection();

  const productId = parseInt(req.body.productId);

  if (isNaN(productId)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }
  const userId = req.session.userId;

  const existing = await db.get(
    'SELECT * from cart_items WHERE user_id = ? AND product_id = ?',
    [userId, productId]
  );

  if (existing) {
    await db.run('UPDATE cart_items SET quantity = quantity + 1 WHERE id = ?', [
      existing.id,
    ]);
  } else {
    await db.run(
      'INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?,?,1)',
      [userId, productId]
    );
  }
  res.json({ message: 'Product added to cart' });
}
