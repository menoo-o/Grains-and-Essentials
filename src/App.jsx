// src/App.jsx
import ScrollToTop from './Components/ScrollToTop'
import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SingleDisplay from './pages/SingleDisplay'

import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogPost from './data/Zero Waste Blogs/BlogPost';  // BlogPost component

import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import RecipeDetail from './Components/RecipeDetail ';
import Footer from './Components/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="app-container">
        <nav>
          <Navbar />
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/single" element={<SingleDisplay />} />


            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id/:slug" element={<BlogPost />} />  
           
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id/:slug" element={<RecipeDetail />} /> {/* Dynamic recipe route */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
