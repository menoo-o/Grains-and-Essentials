// Shop.jsx

import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from '../Components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import products from '../data/productsData'; // Import product data

// Lazy load the ProductGrid component
const ProductGrid = lazy(() => import('../Components/ProductGrid'));

function Shop() {
  const productsPerPage = 12; // Number of products per page
  const navigate = useNavigate();
  const location = useLocation();

  // State for filter and sort options
  const [filter, setFilter] = useState('All Products');
  const [sort, setSort] = useState('best selling');
  const [filteredProducts, setFilteredProducts] = useState(products); // State to hold filtered products
  const [sortedProducts, setSortedProducts] = useState(products); // State to hold sorted products

  // Get the current page from the query parameter
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page')) || 1; // Default to page 1 if no query param

  // Calculate total pages based on filtered products
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(page);

  // Sync URL query param with state
  useEffect(() => {
    navigate(`?page=${currentPage}`);

    // Smooth scroll to top of the page when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage, navigate]);

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Filter products whenever filter changes
  useEffect(() => {
    const filtered = products.filter((product) => {
      if (filter === 'All Products') return true;
      return product.category === filter; // Assuming 'category' field in products data
    });

    setFilteredProducts(filtered);
  }, [filter]);

  // Sort products whenever sort or filteredProducts change
  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', '')) || 0;
      const priceB = parseFloat(b.price.replace('$', '')) || 0;

      if (sort === 'price low to high') return priceA - priceB; // Ascending order
      if (sort === 'price high to low') return priceB - priceA; // Descending order
      if (sort === 'alphabetical a-z') return a.title.localeCompare(b.title); // Alphabetical A-Z
      if (sort === 'alphabetical z-a') return b.title.localeCompare(a.title); // Alphabetical Z-A

      return 0; // Default to 'best selling' which doesn't change order
    });

    setSortedProducts(sorted);
  }, [sort, filteredProducts]);

  // Calculate indexes for slicing the products array
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination control handlers
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <div className='shoppg-heading'>
        <Header
          heading="All Products"
          paragraph="Fill up your pantry stocks here"
        />
      </div>

      <div className='shoppg-container'>
        <div className='left-block-shoppg'>
          <h3>Filter By</h3>
          <select value={filter} onChange={handleFilterChange}>
            <option value="All Products">All Products</option>
            <option value="Grains & Flour">Grains & Flour</option>
            <option value="Lentils">Lentils</option>
            <option value="Baking">Baking</option>
            <option value="Sugar">Sugar</option>
            <option value="Rice">Rice</option>
          </select>

          <h3>Sort By</h3>
          <select value={sort} onChange={handleSortChange}>
            <option value="best selling">Best Selling</option>
            <option value="price low to high">Price Low to High</option>
            <option value="price high to low">Price High to Low</option>
            <option value="alphabetical a-z">Alphabetical A-Z</option>
            <option value="alphabetical z-a">Alphabetical Z-A</option>
          </select>
        </div>

        {/* Suspense with Fallback */}
        <div className="Shop-Container">
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={currentProducts} /> {/* Pass only current page products */}
          </Suspense>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className='pagination'>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt; Prev
        </button>

        {/* Dynamically render page numbers */}
        {[...Array(totalPages).keys()].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next &gt;
        </button>
      </div>

      {/* Display Current Page Information */}
      <div className='page-info'>
        Page {currentPage} of {totalPages}
      </div>
    </>
  );
}

export default Shop;
