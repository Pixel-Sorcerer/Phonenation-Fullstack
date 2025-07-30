import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FavouritePage.css';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const customerId = localStorage.getItem('customerId');

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/favorites/${customerId}`);
                setFavorites(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching favorites:', err);
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [customerId]);

    const handleRemoveFavorite = async (productId) => {
        try {
            await axios.delete(`http://localhost:3001/favorites/${customerId}/${productId}`);
            setFavorites(favorites.filter(item => item.productId !== productId));
        } catch (err) {
            console.error('Error removing favorite:', err);
        }
    };

    if (loading) {
        return <div className="loading">Loading your favorites...</div>;
    }

    return (
        <div className="favorites-container">
            <h1>Your Favourites</h1>

            {favorites.length === 0 ? (
                <div className="empty-favorites">
                    <p>You haven't added any favorites yet.</p>
                    <Link to="/home" className="browse-products">Browse Products</Link>
                </div>
            ) : (
                <div className="favorites-list">
                    {favorites.map((item) => (
                        <div key={item._id} className="favorite-item">
                            <div className="favorite-info">
                                <h3>{item.productName}</h3>
                                <p className="price">{item.price}</p>
                            </div>
                            <div className="favorite-actions">
                                <Link
                                    to={`/product/${item.productId}`}
                                    className="view-button"
                                >
                                    View
                                </Link>
                                <button
                                    onClick={() => handleRemoveFavorite(item.productId)}
                                    className="remove-button"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;