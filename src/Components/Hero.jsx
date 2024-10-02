import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import '../App.css'; // Import custom styles
import ImageLoader from './ImageLoader';

const Hero = () => {
    const carouselItems = [
        {
            imgSrc: '/hero1.jpg',
            text: 'Rice That Reigns Supreme',
        },
        {
            imgSrc: '/hero2.jpg',
            text: 'Nourishing Your Life, One Grain at a Time',
        },
        {
            imgSrc: '/hero3.jpg',
            text: 'Pure Lentils, Pure Nutrition',
        },
    ];

    return (
        <div className="hero-carousel">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <ImageLoader src={item.imgSrc} alt={`Slide ${index + 1}`} />
                        <div className="carousel-text">
                            <h2>{item.text}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
