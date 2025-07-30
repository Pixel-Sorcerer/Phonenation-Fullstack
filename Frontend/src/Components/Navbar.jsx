import React, { useState } from 'react';
import './Navbar.css';
import "boxicons/css/boxicons.min.css";
import "@fontsource/poppins/600.css";
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        onSearch(value);
    };

    return (
        <nav>
            <div className="nav-bar">
                <i className='bx bx-menu hamburger' onClick={() => setIsNavVisible(!isNavVisible)} id="hamburger"></i>
                <div className="logo">PhoneNation</div>
                <div className={`nav-items ${isNavVisible ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#main">Brands</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="rest">
                    <i
                        className='bx bx-search'
                        onClick={() => {
                            setIsSearchVisible(!isSearchVisible);
                            if (isSearchVisible) {
                                setSearchInput('');
                                onSearch('');
                            }
                        }}
                        id="search-icon"
                    ></i>
                    <Link to="/favorites" className="nav-link">
                        <i className='bx bx-heart' id="cart-icon"></i>

                    </Link>
                </div>
            </div>

            {isSearchVisible && (
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;