
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './context/CartContext';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

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

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    const totalPrice = product.price * quantity;

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
                    <div>
                        <p>Quantity: {quantity}</p>
                        <button onClick={handleIncrement}>+</button>
                        <button onClick={handleDecrement}>-</button>
                    </div>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Discount: {product.discountPercentage}% off</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Description: {product.description}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail 