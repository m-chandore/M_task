import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// import handleCart from './redux/action/reducer/handleCart';


const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  

  
  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const jsonData = await response.json();

      if (componentMounted) {
        setData(jsonData.products); // Set data as the products array
        setLoading(false);
      } else {
        console.log("Component is unmounted. Unable to set data.");
        console.log(jsonData);
      }
    };



    getProducts();     

    return () => {
      componentMounted = false;
    };
  }, []);

  const addToFavorites = (productId) => {
    // Logic to add product to favorites
    console.log(`Add to favorites: ${productId}`);
  };

  const ShowProducts = () => {
    // console.log(data); // Log the value of data to check its content
    // console.log(typeof data); // Log the type of data to verify it is an array

    if (!Array.isArray(data)) {
      return <div>Data is not an array.</div>;
    }

    return (
      <>
        {data.map((product) => (
          <div className='col-md-3' key={product.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={product.images[0]} className="card-img-top" alt={product.title} style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.title}</h5>
                <p className="card-text">
                  ${product.price}
                  <p>Discount: {product.discountPercentage}% off</p>
                  <p>Rating: {product.rating}</p>
                  <p>Stock: {product.stock}</p>
                  <p>Brand: {product.brand}</p>
                </p>
                <NavLink to={`/products/${product.id}`} className='btn btn-primary'>
                  View Product
                </NavLink>
                <button className="btn btn-primary" onClick={() => addToFavorites(product.id)}>
                  Add to Favorites
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>Products</h1>
        </div>
      </div>
      <div className='row justify-content-center'>
        {loading ? <div>Loading...</div> : <ShowProducts />}
      </div>
      
    </div>
  );
};

export default Products;



