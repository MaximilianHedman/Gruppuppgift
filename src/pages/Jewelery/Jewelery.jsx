import React, { useEffect, useState } from 'react';
import productService from '../../services/productService';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import './Jewelery.css';

const Jewelery = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productService.getJeweleryProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="store">
            <h1>Jewelery</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onProductClick={() => navigate(`/product/${product.id}`)} />
                ))}
            </div>
        </div>
    );
};

export default Jewelery;