import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../services/productService";
import { productData } from "../../data/productData";
import ProductCard from "../ProductCard/ProductCard"; 
import "./ProductDetails.css";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null); 
    const [selectedSize, setSelectedSize] = useState(null);   

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productService.getSingleProduct(id);
                const localData = productData[parseInt(id)] || {};
                setProduct({ ...data, ...localData });

                const firstColorKey = Object.keys(localData).find((key) => key.includes("color"));
                if (firstColorKey) setSelectedColor(localData[firstColorKey]);

                const firstSizeKey = Object.keys(localData).find((key) => key.includes("size"));
                if (firstSizeKey) setSelectedSize(localData[firstSizeKey]);

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
                <div className="details-product-card-container">
                    {/* ProductCard */}
                    <ProductCard product={product} onProductClick={() => { }} />

                    {/* Product Details */}
                    <div className="details-product-options">
                        <h1 className="product-title">{product.title}</h1>
                        <p className="product-price">
                            <strong>Price:</strong> $ {product.price ? `${product.price}` : "Not available"}
                        </p>

                        <div className="product-options">
                            {/* Color Options */}
                            <div className="option">
                                <p><strong>Colour</strong></p>
                                <div>
                                    {Object.keys(product)
                                        .filter((key) => key.includes("color"))
                                        .map((key, index) => (
                                            <button
                                                key={index}
                                                className={`option-box-color ${selectedColor === product[key] ? "selected" : ""}`}
                                                onClick={() => setSelectedColor(product[key])} 
                                            >
                                                {product[key]}
                                            </button>
                                        ))}
                                </div>
                            </div>

                            {/* Size Options */}
                            <div className="option">
                                <p><strong>Size</strong></p>
                                <div>
                                    {Object.keys(product)
                                        .filter((key) => key.includes("size"))
                                        .map((key, index) => (
                                            <button
                                                key={index}
                                                className={`option-box ${selectedSize === product[key] ? "selected" : ""}`}
                                                onClick={() => setSelectedSize(product[key])} 
                                            >
                                                {product[key]}
                                            </button>
                                        ))}
                                </div>
                            </div>
                        </div>

                        <button className="add-to-cart">ADD TO CART</button>

                        <details className="product-description">
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
