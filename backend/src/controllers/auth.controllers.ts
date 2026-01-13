import type { Request, Response } from 'express';
import type { Session } from 'express-session';
import { getDBConnection } from '../db/db';
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
    const db = await getDBConnection();
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

export async function loginUser(
  req: Request<{}, {}, { username: string; password: string }> & {
    session: Session & { userId?: number };
  },
  res: Response<{ message: string }>
) {
  let { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  username = username.trim();

  try {
    const db = await getDBConnection();
    const user = await db.get('SELECT * FROM users WHERE username = ?', [
      username,
    ]);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    req.session.userId = user.id;

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed' });
  }
}

export async function logoutUser(
  req: Request,
  res: Response<{ message: string }>
) {
  req.session.destroy(() => {
    res.json({ message: 'Logged out successfully' });
  });
}
