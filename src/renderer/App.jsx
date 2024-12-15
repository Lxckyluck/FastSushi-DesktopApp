import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Console from '../pages/Console';
import Settings from '../pages/Settings';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/console" element={<Console />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
