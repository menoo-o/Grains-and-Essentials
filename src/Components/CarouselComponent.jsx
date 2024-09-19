import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from 'react-router-dom'; // Correct import
import '../App.css'; // Make sure to include your custom styles

const CarouselComponent = ({ items }) => {


    const formatTitle = (title) => {
        return title
          .replace(/-/g, ' ') // Replace hyphens with spaces
          .split(' ') // Split by spaces into an array of words
          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
          .join(' '); // Join back into a single string
      };

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}   // Show arrows on all devices
            itemClass="carousel-item"
            centerMode={false}
        >
            {items.map((item, index) => (
                <div key={index} className="new-arrival-item">
                    <img src={item.imgSrc} alt={item.title} />
                    <h3>{formatTitle(item.title)}</h3>
                    
                    {/* Display old price with strikethrough if available */}
                    <div className="price-container">
                        {item.oldPrice && (
                            <p className="old-price">
                                <span className="price-slash">{item.oldPrice}</span>
                            </p>
                        )}
                        <p className="new-price">{item.newPrice || item.price}</p>
                    </div>

                    {/* This button when clicked should direct to /singledisplay/item.title */}
                    <NavLink to={`/singledisplay/${encodeURIComponent(item.title)}`} className="add-to-cart-btn-link">
                        <button className="add-to-cart-btn">Explore</button>
                    </NavLink>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
