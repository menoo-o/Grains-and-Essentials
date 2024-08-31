// src/pages/Shop.jsx

import React, { useState, useEffect } from 'react';
import ProductGrid from '../Components/ProductGrid';
import Header from '../Components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import products from '../data/productsData';
import '../App.css';

function Shop() {
  const productsPerPage = 12;
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page')) || 1;
  const categoryFromURL = query.get('category') || 'All Products';
  const sortFromURL = query.get('sort') || 'best selling';

  const [filter, setFilter] = useState(categoryFromURL);
  const [sort, setSort] = useState(sortFromURL);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortedProducts, setSortedProducts] = useState(products);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(page);

  // Update filter based on URL category
  useEffect(() => {
    setFilter(categoryFromURL);
  }, [categoryFromURL]);

  // Update sort based on URL sort parameter
  useEffect(() => {
    setSort(sortFromURL);
  }, [sortFromURL]);

  // Filter products based on selected filter
  useEffect(() => {
    const filtered = products.filter((product) => {
      if (filter === 'All Products') return true;
      return product.category === filter;
    });
    setFilteredProducts(filtered);
  }, [filter]);

  // Sort products based on selected sort
  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', '')) || 0;
      const priceB = parseFloat(b.price.replace('$', '')) || 0;

      if (sort === 'price low to high') return priceA - priceB;
      if (sort === 'price high to low') return priceB - priceA;
      if (sort === 'alphabetical a-z') return a.title.localeCompare(b.title);
      if (sort === 'alphabetical z-a') return b.title.localeCompare(a.title);

      return 0;
    });

    setSortedProducts(sorted);
  }, [sort, filteredProducts]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Navigate to the correct page and update URL when filter or sort changes
  const updateURL = (filter, sort, page) => {
    const params = new URLSearchParams();
    if (filter !== 'All Products') params.set('category', filter);
    if (sort !== 'best selling') params.set('sort', sort);
    if (page > 1) params.set('page', page);
    navigate(`?${params.toString()}`);
  };

  // Update filter and URL
  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    updateURL(newFilter, sort, 1);
    setCurrentPage(1);
  };

  // Update sort and URL
  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    updateURL(filter, newSort, 1);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updateURL(filter, sort, newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updateURL(filter, sort, newPage);
    }
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    updateURL(filter, sort, pageNum);
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
            <option value="price low to high">Price: Low to High</option>
            <option value="price high to low">Price: High to Low</option>
            <option value="alphabetical a-z">Alphabetical: A-Z</option>
            <option value="alphabetical z-a">Alphabetical: Z-A</option>
          </select>
        </div>

        <div className="Shop-Container">
          <ProductGrid products={currentProducts} />
        </div>
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
}

export default Shop;
