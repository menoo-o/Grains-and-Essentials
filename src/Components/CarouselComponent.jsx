// CarouselComponent.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

const CarouselComponent = ({ items }) => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}                   // Ensures a smooth infinite loop
            autoPlay={true}                   // Enables autoplay
            autoPlaySpeed={3000}              // 3 seconds per slide
            keyBoardControl={true}            // Allows keyboard navigation
            customTransition="transform 500ms ease-in-out"  // Smooth transition
            transitionDuration={500}          // Transition lasts 500ms
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item"
            centerMode={false}     
        >
            {items.map((item, index) => (
                <div key={index} className="new-arrival-item">
                    <img src={item.imgSrc} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <div className="weight-options">
                        <button>250g</button>
                        <button>500g</button>
                        <button>1kg</button>
                    </div>
                    <div className="quantity-selector">
                        <button>-</button>
                        <input type="number" value="1" min="1" />
                        <button>+</button>
                    </div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
