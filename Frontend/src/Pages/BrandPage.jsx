import React from 'react';
import { useParams, Link } from 'react-router-dom';  // Added Link import
import brandData from "../Arrays/BrandData/BrandData";

function BrandPage() {
    const { brandName } = useParams();
    const products = brandData[brandName]; // Get brand-specific data

    if (!products) {
        return <h2>Brand not found!</h2>;
    }

    return (
        <div className="high" id="home">
            <div className="new">
                <h2>{brandName.toUpperCase()} COLLECTION</h2>
            </div>
            <div className="container">
                {products.map((item) => (
                    <div className="card" key={item.id}>
                        <div
                            className="photo"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        <div className="cont"
                            style={{
                                fontSize: "12px"
                            }}>
                            <h3>{item.name}</h3>
                            <Link
                                to={`/product/${item.name.split(' ')[0].toLowerCase()}`}
                                className="button"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrandPage;