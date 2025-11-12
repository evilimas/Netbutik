import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';
import App from './App.tsx';
import Pets from './pages/Pets.tsx';
import Pet from './pages/Pet.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pets',
    element: <Pets />,
  },
  {
    path: '/pets/:id',
    element: <Pet />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
