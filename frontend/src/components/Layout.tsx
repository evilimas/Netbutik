import { Outlet } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
