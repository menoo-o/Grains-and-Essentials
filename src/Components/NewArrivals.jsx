// NewArrivals.jsx
import React from 'react';
import CarouselComponent from './CarouselComponent';
import Button from './Button';
import newItemsData from '../data/newItemsData';


const NewArrivals = () => {
    return (
        <section>
            <div className="heading-items">
                <h1>NEW ARRIVALS</h1>
                <Button />
            </div>
            <CarouselComponent items={newItemsData} />
        </section>
    );
};

export default NewArrivals;
