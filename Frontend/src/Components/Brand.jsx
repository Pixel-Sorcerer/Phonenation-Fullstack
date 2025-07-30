import React from 'react';
import logo from '../Arrays/BrandLogo/Logo';
import './Brand.css';
import { Link } from 'react-router-dom';

function Brand() {
    return (
        <div id="main">
            <div className="new">
                <h2>BRANDS</h2>
            </div>
            <div className="box">
                {logo.map((item) => (
                    <Link
                        to={`/brand/${item.name.toLowerCase()}`}
                        key={item.id}
                        className="brand"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Brand;