import { NavLink } from 'react-router';

function Nav() {
  return (
    <nav className="navigation">
      <img className="logo" src="/images/logo.png" alt="" />
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
export default Nav;
