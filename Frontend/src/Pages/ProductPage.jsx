import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../Arrays/ProductData/ProductData';
import './ProductPage.css';
import axios from 'axios';

const ProductPage = () => {
    const { productId } = useParams();
    const product = productData[productId.toLowerCase()];
    const [mainImage, setMainImage] = useState(product?.images[0]?.image);
    const [isFavorite, setIsFavorite] = useState(false);

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const handleAddToFav = async () => {
        try {
            const customerId = localStorage.getItem('customerId'); // You'll need to set this on login

            if (!isFavorite) {
                // Add to favorites
                await axios.post(`${backendURL}/favorites`, {
                    customerId,
                    productId: productId.toLowerCase(),
                    productName: product.name,
                    price: product.price
                });
            } else {
                // Remove from favorites
                await axios.delete(`${backendURL}favorites/${customerId}/${productId.toLowerCase()}`);
            }
            setIsFavorite(!isFavorite);
        } catch (err) {
            console.error('Error updating favorites:', err);
        }
    };

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <div className="product">
            <div className="product-layout">
                <div className="product-image-container">
                    <div className="product-gallery">
                        <div className="product-thumbnails">
                            {product.images.map((image) => (
                                <img
                                    key={image.id}
                                    src={image.image}
                                    onClick={() => setMainImage(image.image)}
                                    alt={image.alt}
                                />
                            ))}
                        </div>
                        <div className="product-main-image">
                            <img src={mainImage} id="imagebox" alt="Main product view" />
                            <div className="product-price-section">
                                <h2 className="product-title">{product.name}</h2>
                                <h3 className="product-price">{product.price}</h3>
                                <button
                                    onClick={handleAddToFav}
                                    className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
                                >
                                    {isFavorite ? '❤️ Added to Favorites' : '♡ Add to Favorites'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-description">
                    <div className="product-features">
                        <h3>Features</h3>
                        <ul className="features-list">
                            {product.features.map((feature, index) => (
                                <li key={index}>
                                    <span className={feature.hasFeature ? "checkmark" : "crossmark"}>
                                        {feature.hasFeature ? "✔" : "✘"}
                                    </span>
                                    {feature.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="product-container">
                        <div className="section-heading">
                            <span>BEST BUY LINKS</span>
                        </div>

                        {product.variants.map((variant, variantIndex) => (
                            <div key={variantIndex}>
                                <div className="variant-heading">
                                    <span>VARIANT : {variant.variant}</span>
                                </div>
                                <div className="price-variants">
                                    {variant.prices.map((price, priceIndex) => (
                                        <a key={priceIndex} href={price.link} target="_blank" rel="noopener noreferrer">
                                            <div className="store-price-box">
                                                <div className="store-logo" id={`${price.platform}-logo`}></div>
                                                <div className="store-price-text">
                                                    <span>{price.price}</span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="specs-section">
                <div className="specs-table-container">
                    <div className="specs-header">
                        <h2>Full Specifications</h2>
                    </div>
                    <table className="specs-table">
                        <tbody>
                            {product.specifications1.map((spec, index) => (
                                spec.isHeader ? (
                                    <tr key={index}>
                                        <th colSpan="2">{spec.category}</th>
                                    </tr>
                                ) : (
                                    <tr key={index}>
                                        <td>{spec.label}</td>
                                        <td style={{ whiteSpace: 'pre-line' }}>{spec.value}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="specs-table-container-secondary">
                    <table className="specs-table">
                        <tbody>
                            {product.specifications2.map((spec, index) => (
                                spec.isHeader ? (
                                    <tr key={index}>
                                        <th colSpan="2">{spec.category}</th>
                                    </tr>
                                ) : (
                                    <tr key={index}>
                                        <td>{spec.label}</td>
                                        <td>{spec.value}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="product-additional-content">
                <div className="video-review">
                    <div className="section-heading">
                        <h2>YOUTUBE REVIEW</h2>
                    </div>
                    <iframe
                        className="youtube-embed"
                        src={product.youtubeVideoId}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                <div className="box-contents">
                    <div className="section-heading">
                        <h2>BOX CONTENT</h2>
                    </div>
                    <div
                        className="box-contents-image"
                        style={{
                            backgroundImage: `url(${product.boxImage})`
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;