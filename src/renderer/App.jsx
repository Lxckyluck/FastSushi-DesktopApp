import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Gestion from '../pages/Gestion';
import UserGestion from '../pages/User_Gestion';
import ProductGestion from '../pages/Product_Gestion';
import Appetizer from '../pages/Appetizer';
import Plate from '../pages/Plate';
import Dessert from '../pages/Dessert';
import OrderGestion from '../pages/Order_Gestion';
import Account from '../pages/Account';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/usergestion" element={<UserGestion />} />
        <Route path="/productgestion" element={<ProductGestion />} />
        <Route path="/appetizer" element={<Appetizer />} />
        <Route path="/plate" element={<Plate />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/ordergestion" element={<OrderGestion />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}
