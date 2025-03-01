import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../services/productService';
import './ProductDetails.css';
import { productData } from '../../data/productData';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productService.getSingleProduct(id);
                const localData = productData[parseInt(id)] ||  {};

                setProduct({...data,...localData});
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
                <div className="product-card">
                   
                    <div className="product-image-container">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <button className="wishlist-btn">♡</button>
                        <button className="cart-btn">🛍</button>
                    </div>

                  
                    <div className="product-info">
    <h1 className="product-title">{product.title}</h1>
    <p className="product-price">Price: {product.price ? `${product.price}` : "Not available"}</p>

    <div className="product-options">
      
        <div className="option">
            <p> Colour</p>
            <div>
                {
                    
                    Object.keys(product)
                        .filter(key => key.includes("color")) 
                        .map((key, index) => (
                            <button key={index} className="option-box-color">{product[key]}</button>
                        ))
                }
            </div>
        </div>

        
        <div className="option">
            <p>Size</p>
            <div>
                {
                   
                    Object.keys(product)
                        .filter(key => key.includes("size"))
                        .map((key, index) => (
                            <button key={index} className="option-box">{product[key]}</button>
                        ))
                }
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
