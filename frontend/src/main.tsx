import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './index.css';
import Pets from './pages/Pets.tsx';
import Pet from './pages/Pet.tsx';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Login from './pages/Login.tsx';
import Cart from './pages/Cart.tsx';
import PaymentSuccess from './pages/PaymentSuccess.tsx';
import { CartCountProvider } from './context/cartCountContext.ts';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/pets',
        element: <Pets />,
      },
      {
        path: '/pets/:id',
        element: <Pet />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/payment-success',
        element: <PaymentSuccess />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <CartCountProvider>
        <RouterProvider router={router} />
      </CartCountProvider>
    </Elements>
  </StrictMode>,
);
