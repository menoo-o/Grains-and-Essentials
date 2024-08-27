import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import products from '../data/productsData';

import ProductFilter from '../Components/ProductFilter';
import ProductSort from '../Components/ProductSort';
import ProductGrid from '../Components/ProductGrid';
import PaginationControls from '../Components/PaginationControls';

function Shop() {
  const productsPerPage = 12;
  const navigate = useNavigate();
  const location = useLocation();

  const [filter, setFilter] = useState('All Products');
  const [sort, setSort] = useState('best selling');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortedProducts, setSortedProducts] = useState(products);

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page')) || 1;

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    navigate(`?page=${currentPage}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, navigate]);

  useEffect(() => {
    const filtered = products.filter((product) => filter === 'All Products' || product.category === filter);
    setFilteredProducts(filtered);
  }, [filter]);

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

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  return (
    <>
      <div className='shoppg-heading'>
        <Header heading="All Products" paragraph="Fill up your pantry stocks here" />
      </div>

      <div className='shoppg-container'>
        <div className='left-block-shoppg'>
          <ProductFilter filter={filter} handleFilterChange={handleFilterChange} />
          <ProductSort sort={sort} handleSortChange={handleSortChange} />
        </div>

        <div className="Shop-Container">
          <ProductGrid products={currentProducts} />
        </div>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className='page-info'>
        Page {currentPage} of {totalPages}
      </div>
    </>
  );
}

export default Shop;
