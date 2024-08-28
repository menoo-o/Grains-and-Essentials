import {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css'; // Make sure to include your custom styles

const CarouselComponent = ({ items }) => {

    const [selectedWeights, setSelectedWeights] = useState({});

    const handleWeightClick = (index, weight) => {
        setSelectedWeights((prevWeights) => ({ ...prevWeights, [index]: weight }));
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
            autoPlay={false}
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
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <div className="weight-options">
                        {['250g', '500g', '1kg'].map((weight) => (
                            <button
                                key={weight}
                                className={`weight-btn ${selectedWeights[index] === weight ? 'active' : ''}`}
                                onClick={() => handleWeightClick(index, weight)}
                            >
                                {weight}
                            </button>
                        ))}
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
