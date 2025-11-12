import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './pages/Home';
import Pets from './pages/Pets';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Nav /> {/* ✅ This will appear on all pages */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
