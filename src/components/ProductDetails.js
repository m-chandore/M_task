import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cart from './buttons/Cart';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleAddToCart = () => {
        // Add the product to the cart
        // You can pass the product object or the necessary product data to the addToCart function
        Cart.addToCart(product);
      };
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const jsonData = await response.json();

            setProduct(jsonData);
            setLoading(false);
        };

        getProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>{product.title}</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={product.images[0]} alt={product.title} />
                </div>
                <div className='col-md-6'>
                    <p>Price: ${product.price}</p>
                    <p>Discount: {product.discountPercentage}% off</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Description: {product.description}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
