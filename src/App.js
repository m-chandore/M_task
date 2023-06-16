import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Product from './components/Products';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/buttons/Login';
import ProductDetail from './components/ProductDetails';
import Cart from './components/buttons/Cart';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/buttons/Login" element={<Login/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/buttons/Cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
