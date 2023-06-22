import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setSelectedProduct(null);
    setIsModalVisible(false);
  };

  const contextValue = {
    showModal,
    hideModal,
    selectedProduct,
    isModalVisible
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};


