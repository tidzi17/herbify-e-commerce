import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home';
import CategoriesPage from './pages/categories';
import SalePage from './pages/sale';
import CartPage from './pages/cart';
import Wishlist from './pages/wishlist';
import AboutPage from './pages/about';
import Footer from './components/footer';
import Subscribe from './components/subscribe';
import FaqPage from './pages/faq';
import NotFound from './pages/404';




function App() {
  return (
    <>
   
    <div className="wrapper">
    <Navbar/>
    <Routes>
    <Route path="/" exact element={<HomePage />} />
    <Route path="/categories" exact element={<CategoriesPage />} />
    <Route path="/about" exact element={<AboutPage />} />
    <Route path="/sale" exact element={<SalePage />} />
    <Route path="/cart" exact element={<CartPage />} />
    <Route path="/wishlist" exact element={<Wishlist />} />
    <Route path="/faq" exact element={<FaqPage />} />
    <Route path='*' element={<NotFound />}/>
    </Routes>
    <Subscribe />
    <Footer />
    </div>
  
  </>
  );
}

export default App;
