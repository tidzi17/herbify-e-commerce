import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home';
import CategoriesPage from './pages/categories';
import SalePage from './pages/sale';
import CartPage from './pages/cart';
import Wishlist from './pages/wishlist';
import AboutPage from './pages/about';
import Footer from './components/footer';



function App() {
  return (
    <>
   
    <div className="wrapper">
    <Navbar/>
    <Routes>
    <Route path="/" exact element={<HomePage />} />
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/sale" element={<SalePage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    <Footer />
    </div>
  
  </>
  );
}

export default App;
