import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../services/productService';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productService.getSingleProduct(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="product-details">
            {product && (
                <div>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;