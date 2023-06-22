
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeProduct } = useContext(CartContext);
  const { isLoggedIn, username, email } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      navigate('/buttons/Login');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <div>
                  <div className='col-md-3'>
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                  <span>{product.title}</span>
                  <span>Price: ${product.price}</span>
                  <span>Discount: {product.discountPercentage}% off</span>
                  <span>Quantity: {product.quantity}</span>
                  <button onClick={() => incrementQuantity(product.id)}>+</button>
                  <button onClick={() => decrementQuantity(product.id)}>-</button>
                  <button onClick={() => removeProduct(product.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
      {showModal && (
        <Modal
          productDetails="Product details"
          username={username}
          email={email}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Cart;


