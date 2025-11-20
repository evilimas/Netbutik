import { NavLink, useNavigate } from 'react-router';

function Nav() {
  const navigate = useNavigate();
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
