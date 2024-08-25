// Shop JSX
import React from 'react';
import ProductGrid from '../Components/ProductGrid';


const products = [
    { imgSrc: '/new-items/item1.jpg', title: 'Cardamom', price: '$5.99' },
    { imgSrc: '/new-items/item2.jpg', title: 'Chick Pea', price: '$1.99' },
    { imgSrc: '/new-items/item3.jpg', title: 'Coffee Beans', price: '$2.99' },
    { imgSrc: '/new-items/item4.jpg', title: 'Gluten-Free Flour', price: '$4.99' },
    { imgSrc: '/new-items/item5.jpg', title: 'Mint Leaves', price: '$8.99' },
    { imgSrc: '/new-items/item1.jpg', title: 'Cardamom', price: '$5.99' },
    { imgSrc: '/new-items/item2.jpg', title: 'Chick Pea', price: '$1.99' },
    { imgSrc: '/new-items/item3.jpg', title: 'Coffee Beans', price: '$2.99' },
    { imgSrc: '/new-items/item4.jpg', title: 'Gluten-Free Flour', price: '$4.99' },
    { imgSrc: '/new-items/item5.jpg', title: 'Mint Leaves', price: '$8.99' },
    
    // Add more items
];

function Shop() {
  return (
    <div className="Shop-Container">
      <ProductGrid products={products} />
    </div>
  );
}

export default Shop;
