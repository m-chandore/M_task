import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorites = (productId) => {
    
    setFavoriteProducts([...favoriteProducts, productId]);
  };

  const removeFavoriteProduct = (productId) => {
    setFavoriteProducts((prevProducts) => prevProducts.filter((id) => id !== productId));
  };

  return (
    <FavoriteContext.Provider value={{ favoriteProducts, addToFavorites, removeFavoriteProduct,
       }}>
      {children}
    </FavoriteContext.Provider>
  );
};
