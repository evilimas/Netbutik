# Netbutik - Pet Store Application

A modern full-stack pet store application built with React, TypeScript, Express, and SQLite. Features include pet browsing, shopping cart functionality, user authentication, and Stripe payment integration.

## 🎯 Features

- **Pet Catalog**: Browse available pets with filtering by species and breed
- **User Authentication**: Register and login with secure password hashing
- **Shopping Cart**: Add/remove items from cart with real-time updates
- **Payment Processing**: Secure payments with Stripe integration
- **Responsive Design**: Mobile-friendly interface
- **Session Management**: Persistent user sessions with express-session

## 🛠️ Tech Stack

### Frontend
- React 19 with TypeScript
- React Router v7 for navigation
- Vite for build tooling
- Axios for API calls
- Stripe.js for payment processing
- React Context for state management

### Backend
- Node.js with Express
- TypeScript
- SQLite3 for database
- Stripe API for payments
- bcryptjs for password hashing
- express-session for authentication

## 📁 Project Structure

```
Netbutik/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Business logic
│   │   ├── routes/           # API endpoints
│   │   ├── middleware/       # Authentication & validation
│   │   ├── db/              # Database connection
│   │   ├── data/            # Pet data
│   │   └── index.ts         # Server entry point
│   ├── database.db          # SQLite database
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/           # Route components
    │   ├── components/      # Reusable components
    │   ├── services/        # API calls
    │   ├── context/         # React Context
    │   ├── types/           # TypeScript types
    │   └── main.tsx         # App entry point
    ├── index.html
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```env
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
SPIRAL_SESSION_SECRET=your_session_secret_here
PORT=8000
```

4. Create database tables:
```bash
npm run build
node createUserTable.mjs
node createPetTable.mjs
node createCartTable.mjs
node seedTable.mjs  # Optional: seed with pet data
```

5. Start the server:
```bash
npm start
```

Server runs on `http://localhost:8000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

4. Start development server:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /pets/auth/register` - Register new user
- `POST /pets/auth/login` - Login user
- `GET /pets/auth/logout` - Logout user
- `GET /pets/auth/me` - Get current user

### Pets
- `GET /pets` - Get all pets
- `GET /pets/:id` - Get pet by ID
- `GET /pets/breeds` - Get available breeds
- `GET /pets/species` - Get available species

### Cart
- `GET /pets/cart` - Get cart items
- `GET /pets/cart/cart-count` - Get cart item count
- `POST /pets/cart/add` - Add item to cart
- `DELETE /pets/cart/:cartItemId` - Remove item from cart
- `DELETE /pets/cart/all` - Clear entire cart

### Payment
- `POST /create-payment-intent` - Create Stripe payment intent

## 🔐 Authentication

- Passwords are hashed using bcryptjs
- Sessions are managed with express-session
- Authentication middleware (`requireAuth`) protects secured endpoints
- Credentials are sent with `withCredentials: true` in API calls

## 💳 Payment Processing

- Stripe integration for secure payments
- PaymentElement for payment form
- Client secret generated on backend for each transaction
- Successful payments redirect to `/payment-success`
- Cart is automatically cleared after successful payment

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Pets Table
```sql
CREATE TABLE pets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  species TEXT NOT NULL,
  breed TEXT NOT NULL,
  age INTEGER NOT NULL,
  price REAL NOT NULL,
  newPrice REAL,
  description TEXT NOT NULL,
  photo TEXT NOT NULL,
  sold BOOLEAN DEFAULT 0,
  onSale BOOLEAN DEFAULT 0,
  vaccinations TEXT NOT NULL,
  weightKg REAL NOT NULL,
  microchipId TEXT
)
```

### Cart Items Table
```sql
CREATE TABLE cart_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  pet_id INTEGER NOT NULL,
  quantity INTEGER DEFAULT 1,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (pet_id) REFERENCES pets(id)
)
```

## 🧪 Testing

### Test Stripe Payment
- Use test card: `4242 4242 4242 4242`
- Any future expiry date
- Any 3-digit CVC

## 🔧 Configuration

### CORS
Frontend URL: `http://localhost:5173`
Backend URL: `http://localhost:8000`

### Session
- Secure: false (development only)
- HttpOnly: true (prevents XSS attacks)
- SameSite: lax

## 📝 Development Notes

- Run both backend and frontend servers simultaneously
- Backend compiles TypeScript on each start: `npm start`
- Frontend hot-reloads with Vite during development
- Check browser console and terminal for error logs

## 🚢 Production Deployment

Before deploying:
1. Change `secure: true` in session cookie settings
2. Set proper CORS origin to your domain
3. Use HTTPS for all endpoints
4. Set strong environment variable secrets
5. Use production Stripe keys

## 📞 Support

For issues or questions:
1. Check the error logs in console
2. Verify all environment variables are set
3. Ensure both servers are running
4. Check database connection

## 📄 License

ISC

---

**Note**: This is a development version. For production use, additional security measures and optimizations are recommended.
