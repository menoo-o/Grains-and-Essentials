// SaleItems.jsx
import React from 'react';
import CarouselComponent from './CarouselComponent';

const saleItems = [
    { imgSrc: '/sale-items/item1.jpg', title: 'Almonds', price: '$5.99' },
    { imgSrc: '/sale-items/item2.jpg', title: 'Black Pepper', price: '$7.99' },
    { imgSrc: '/sale-items/item3.jpg', title: 'Honey', price: '$5.99' },
    { imgSrc: '/sale-items/item4.jpg', title: 'Oats', price: '$2.99' },
    { imgSrc: '/sale-items/item5.jpg', title: 'Red Pepper', price: '$10.99' },
    // Add more items
];

const SaleItems = () => {
    return (
        <section>
         <div className="heading-items">
            <h1>Sale Products</h1>
            <div className="link-shop">
              <a href="#" className="shop-all shop-view">View All</a>
            </div>
          </div>

            <CarouselComponent items={saleItems} />
        </section>
    );
};

export default SaleItems;
