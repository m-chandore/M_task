import React, { useContext } from 'react';
import { ModalContext } from '../components/context/ModelContext';

const Checkoutpage = () => {
  const { selectedProduct, showModal } = useContext(ModalContext);

  const handleCheckout = () => {
    if (selectedProduct) {
      showModal(selectedProduct);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
      {selectedProduct && (
        <div>
          <h3>Selected Product:</h3>
          <p>Title: {selectedProduct.title}</p>
          <p>Price: {selectedProduct.price}</p>
         
        </div>
      )}
    </div>
  );
};

export default Checkoutpage;
