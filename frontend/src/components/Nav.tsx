import { NavLink, useNavigate } from 'react-router';
import { displayLogedUser } from '../services/authServices';
import { useEffect, useState } from 'react';

function Nav() {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      const userData = await displayLogedUser();
      if (userData && userData.username) {
        setUsername(userData.username);
      } else {
        setUsername('Guest');
      }
    };
    fetchUsername();
  }, []);

  return (
    <nav className="navigation">
      <img className="logo" src="/images/logo.png" alt="" />
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
      <div className="buttons">
        <p className="welcome-message">Welcome, {username}</p>
        <button className="login-button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="login-button" onClick={() => navigate('/cart')}>
          Cart
        </button>
      </div>
    </nav>
  );
}
export default Nav;
