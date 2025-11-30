import type { Request, Response } from 'express';
import type { Session } from 'express-session';
import { getDBConection } from '../db/db';
import validator from 'validator';
import bcrypt from 'bcryptjs';

type RegisterQueryParams = {
  name: string;
  username: string;
  email: string;
  password: string;
};
export async function registerUser(
  req: Request<{}, {}, RegisterQueryParams> & {
    session: Session & { userId?: number };
  },
  res: Response<{ message: string }>
) {
  let { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  name = name.trim();
  email = email.trim();
  username = username.trim();

  if (!/^[a-zA-Z0-9_-]{1,20}$/.test(username)) {
    return res.status(400).json({
      message:
        'Username must be 1–20 characters, using letters, numbers, _ or -.',
    });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email adress' });
  }

  console.log(req.body);

  try {
    const db = await getDBConection();
    const existing = await db.get(
      `SELECT id FROM users WHERE email = ? OR username = ?`,
      [email, username]
    );
    if (existing) {
      return res
        .status(400)
        .json({ message: 'User with given email or username already exists' });
    }
    const hashed = await bcrypt.hash(password, 10);

    const result = await db.run(
      `INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)`,
      [name, username, email, hashed]
    );

    req.session.userId = result.lastID;

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
}
