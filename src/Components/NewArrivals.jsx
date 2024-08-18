// NewArrivals.jsx
import React from 'react';
import CarouselComponent from './CarouselComponent';

const newArrivals = [
    { imgSrc: '/new-items/item1.jpg', title: 'Cardamom', price: '$5.99' },
    { imgSrc: '/new-items/item2.jpg', title: 'Chick Pea', price: '$1.99' },
    { imgSrc: '/new-items/item3.jpg', title: 'Coffee Beans', price: '$2.99' },
    { imgSrc: '/new-items/item4.jpg', title: 'Gluten-Free Flour', price: '$4.99' },
    { imgSrc: '/new-items/item5.jpg', title: 'Mint Leaves', price: '$8.99' },
    
    // Add more items
];

const NewArrivals = () => {
    return (
        <section>
            <div className="heading-items">
                <h1>New Arrivals</h1>
                <div className="link-shop">
                     <a href="#" className="shop-all shop-view">View All</a>
                 </div>
            </div>
            <CarouselComponent items={newArrivals} />
        </section>
    );
};

export default NewArrivals;
