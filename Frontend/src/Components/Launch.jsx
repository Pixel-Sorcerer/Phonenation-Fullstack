import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import masterData from '../Arrays/Masterdata/master';
import latestLaunch from '../Arrays/LatestLaunch/LatestLaunch';
import './Launch.css';
import "@fontsource/poppins/600.css";

function Launch({ searchQuery = '' }) {
    const [displayData, setDisplayData] = useState(latestLaunch);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (searchQuery.trim()) {
            setIsSearching(true);
            const lowerQuery = searchQuery.toLowerCase();
            const results = masterData.filter(product =>
                product.name.toLowerCase().includes(lowerQuery) ||
                product.brand.toLowerCase().includes(lowerQuery)
            );
            setDisplayData(results);
        } else {
            // Only reset if we were previously searching
            if (isSearching) {
                setIsSearching(false);
                setDisplayData(latestLaunch);
            }
        }
    }, [searchQuery, isSearching]);

    return (
        <div className="high" id="home">
            <div className="new">
                <h2>{isSearching ? 'SEARCH RESULTS' : 'LATEST LAUNCH'}</h2>
            </div>
            <div className="container">
                {displayData.length > 0 ? (
                    displayData.map((item) => (
                        <div className="card" key={`${item.id}-${item.brand}`}>
                            <div className='photo'
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            <div className="cont">
                                <h3>{item.name}</h3>
                                <Link
                                    to={`/product/${item.name.split(' ')[0].toLowerCase()}`}
                                    className="button"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>No products found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Launch;