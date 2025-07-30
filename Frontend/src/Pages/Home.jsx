import Navbar from '../Components/Navbar'
import Launch from '../Components/Launch'
import Brand from '../Components/Brand'
import AboutUs from '../Components/AboutUs'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import React, { useState } from 'react';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <Navbar onSearch={setSearchQuery} />
            <Launch searchQuery={searchQuery} />
            <Brand />
            <AboutUs />
            <Form />
            <Footer />
        </div>
    )
}

export default Home