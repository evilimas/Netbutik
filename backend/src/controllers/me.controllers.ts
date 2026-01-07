import { getDBConnection } from '../db/db';
import type { Request, Response } from 'express';

export async function getCurrentUser(
  req: Request<{ userId: number }> & { session: { userId?: number } },
  res: Response
) {
  try {
    const db = await getDBConnection();

    const { userId } = req.session;

    if (!userId) {
      return res.json({ isLoggedIn: false });
    }
    const user = await db.get(`SELECT name FROM users WHERE id = ?`, [userId]);
    res.json({ isLoggedIn: true, name: user.name });
  } catch (err) {
    console.error('getCurrentUser error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
