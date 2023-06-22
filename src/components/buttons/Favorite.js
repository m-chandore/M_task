import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const Favorite = () => {
  const { favoriteProducts, removeFavoriteProduct} = useContext(FavoriteContext);
  
  const handleRemove = (productId) => {
    removeFavoriteProduct(productId);
  };


  return (
    <div>
      <h1>Favorite Products</h1>
      <ul>
        {favoriteProducts.map((productId) => (
          <li key={productId}>Product ID: {productId}
           <br/>
          <button onClick={() => handleRemove(productId)}>Remove</button>
          <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;

