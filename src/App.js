import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Products';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/buttons/Login';
import ProductDetail from './components/ProductDetails';
import Cart from './components/buttons/Cart';
import Checkoutpage from './components/Checkoutpage';
import Favorite from './components/buttons/Favorite';
import { CartProvider } from './components/context/CartContext';
import { FavoriteProvider } from './components/context/FavoriteContext';
import { AuthProvider } from './components/context/AuthContext';
import { ModalProvider } from './components/context/ModelContext';


function App() {

  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <CartProvider>
            <FavoriteProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/buttons/Login" element={<Login />} />
                <Route path="/buttons/Favorite" element={<Favorite />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/buttons/Cart" element={<Cart />} />
                <Route path="/Checkoutpage" element={<Checkoutpage />} />
              </Routes>
            </FavoriteProvider>
          </CartProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;
