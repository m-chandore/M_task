import React, { useContext } from 'react';
import { ModalContext } from '../components/context/ModelContext';

const Modal = () => {
  const { selectedProduct, hideModal } = useContext(ModalContext);

  if (!selectedProduct) {
    return null; 
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Selected Product</h2>
        <p>Title: {selectedProduct.title}</p>
        <p>Price: {selectedProduct.price}</p>
        <button onClick={hideModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
