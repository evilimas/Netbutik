import type { Request, Response, NextFunction } from 'express';

export function requireAuth(
  resq: Request & { session: { userId?: number } },
  res: Response,
  next: NextFunction
) {
  if (!resq.session.userId) {
    console.log('Access denied. User not authenticated.');
    return res.status(401).json({ message: 'Not authenticated' });
  }
  next();
}
