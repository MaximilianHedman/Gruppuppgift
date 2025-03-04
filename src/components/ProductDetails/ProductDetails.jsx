import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../services/productService';
import { productData } from '../../data/productData';
import ProductCard from '../ProductCard/ProductCard'; // Import ProductCard
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
                const localData = productData[parseInt(id)] || {};
                setProduct({ ...data, ...localData });
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
        <div className="product-details-container">
            {product && (
                <div className="product-details-card">
                    {/* ProductCard inside ProductDetails (No style conflicts now) */}
                    <ProductCard product={product} onProductClick={() => { }} variant="details" />
                    {/* Product details section */}
                    <div className="product-details-info">
                        <h1 className="product-details-title">{product.title}</h1>
                        <p className="product-details-price">
                            Price: {product.price ? `${product.price}` : "Not available"}
                        </p>
                        <div className="product-details-options">
                            {/* Color Options */}
                            <div className="product-details-option">
                                <p>Colour</p>
                                <div>
                                    {Object.keys(product)
                                        .filter(key => key.includes("color"))
                                        .map((key, index) => (
                                            <button key={index} className="product-details-option-box-color">
                                                {product[key]}
                                            </button>
                                        ))}
                                </div>
                            </div>
                            {/* Size Options */}
                            <div className="product-details-option">
                                <p>Size</p>
                                <div>
                                    {Object.keys(product)
                                        .filter(key => key.includes("size"))
                                        .map((key, index) => (
                                            <button key={index} className="product-details-option-box">
                                                {product[key]}
                                            </button>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <button className="product-details-add-to-cart">ADD TO CART</button>
                        <details className="product-details-description">
                            <summary>DESCRIPTION</summary>
                            <p>{product.description}</p>
                        </details>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ProductDetails;