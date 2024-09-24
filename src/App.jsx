// src/App.jsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Loading from './Components/Loader';  // A loading component to show while components are being loaded
import { CartProvider } from './contexts/CartContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RecipeDetail from './Components/RecipeDetail ';

// Lazy loading for pages and components
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Singledisplay = lazy(() => import('./pages/Singledisplay'));
const About = lazy(() => import('./pages/About'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./data/Zero Waste Blogs/BlogPost'));  // Lazy loaded BlogPost
const CombinedForm = lazy(() => import('./pages/Login'));  // Login/Signup page
const Recipes = lazy(() => import('./pages/Recipes'));
const Contact = lazy(() => import('./pages/Contact'));
const Cart = lazy(() => import('./pages/Cart'));

// Importing CSS files
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

        {/* Wrapping routes in Suspense for lazy loading */}
        <Suspense fallback={<Loading />}> {/* This will show Loading component while the components load */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/singledisplay/:slug" element={<Singledisplay />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id/:slug" element={<BlogPost />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id/:slug" element={<RecipeDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<CombinedForm />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
