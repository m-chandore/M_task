import React from 'react'
import { useState } from 'react';
const Favorite = () => {
    const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="add-to-favorites">
      <button
        className={`favorite-button ${isFavorite ? 'active' : ''}`}
        onClick={toggleFavorite}
      >
        {isFavorite ? (
          <i className="fa fa-heart" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        )}
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>)
}

export default Favorite
