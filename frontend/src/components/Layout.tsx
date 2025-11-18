import { Outlet } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Nav /> {/* Navigation appears on all pages */}
      <main className="p-4">
        <Outlet /> {/* Render the matched child route here */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
