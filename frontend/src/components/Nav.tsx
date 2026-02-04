import { NavLink, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { cartCount } from '../services/cartServices';
import { useCartCount } from '../context/cartCountContext';
import axios from 'axios';
// import { checkAuth, displayLogedUser, logout } from '../services/authServices';

function Nav() {
  const [username, setUsername] = useState<string | null>(null);
  const { cartCount: cartCountValue, setCartCount } = useCartCount();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:8000/pets/auth/me', {
          method: 'GET',
          credentials: 'include', // Include cookies/session
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          console.warn('Auth check failed:', res.status);
          setUsername('Guest');
          return false;
        }

        const user = await res.json();
        if (!user.isLoggedIn) {
          setUsername('Guest');
          return false;
        }

        setUsername(user.name);
        console.log('Nav username:', user.name);
        return true;
      } catch (err) {
        console.log(err, 'Auth check failed');
        setUsername('Guest');
        return false;
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await cartCount();
        setCartCount(response.count);
        console.log('Cart count fetched:', response.count);
      } catch (err) {
        console.error('Error fetching cart count:', err);
        setCartCount(0);
      }
    };
    fetchCartCount();
  }, [setCartCount]);

  async function logout() {
    try {
      // const res = await fetch('http://localhost:8000/pets/auth/logout', {
      //   method: 'GET',
      //   credentials: 'include', // Include cookies/session
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      const response = await axios.get(
        'http://localhost:8000/pets/auth/logout',
        {
          withCredentials: true,
        },
      );
      await navigate('/');
      await setUsername('Guest');
      setCartCount(0);
      return response.data;
    } catch (err) {
      console.log('failed to log out', err);
    }
  }

  // useEffect(() => {
  //   const fetchUsername = async () => {
  //     const userData = await displayLogedUser();
  //     if (userData && userData.username) {
  //       setUsername(userData.username);
  //     } else {
  //       setUsername('Guest');
  //     }
  //   };
  //   fetchUsername();
  // }, []);

  // async function checkAuth() {
  //   try {
  //     const res = await fetch('/api/auth/me');

  //     if (!res.ok) {
  //       console.warn('Unexpected response:', res.status);
  //       return false;
  //     }

  //     const user = await res.json();
  //     if (!user.isLoggedIn) {
  //       return false;
  //     }
  //     return user.name;
  //   } catch (err) {
  //     console.log(err, 'Auth check failed');
  //     return false;
  //   }
  // }

  return (
    <div className="nav-container">
      <nav className="navigation">
        <img className="logo" src="/images/logo.png" alt="" />

        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pets">Pets</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
      <div className="buttons">
        <div className="left">
          <p className="welcome-message">Welcome, {username}</p>
        </div>
        <div className="right">
          {username === 'Guest' ? (
            <button className="login-button" onClick={() => navigate('/login')}>
              Login
            </button>
          ) : (
            <button className="logout-button" onClick={() => logout()}>
              Logout
            </button>
          )}
          {cartCountValue > 0 && username !== 'Guest' && (
            <button className="cart-button" onClick={() => navigate('/cart')}>
              <img src="/images/cart1.png" alt="Cart" />{' '}
              <span>{cartCountValue}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Nav;
