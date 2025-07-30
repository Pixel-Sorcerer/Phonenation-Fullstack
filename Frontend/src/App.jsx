import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BrandPage from './Pages/BrandPage';
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup'
import FavoritesPage from './Pages/FavouritePage.jsx';
import Thanks from './Pages/Thanks.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/brand/:brandName" element={<BrandPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
}

export default App;