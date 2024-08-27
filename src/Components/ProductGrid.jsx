import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';
import '../App.css'; // You'll define your custom styles here

const ProductGrid = ({ products }) => {
  const [layout, setLayout] = useState([]);
  const [cols, setCols] = useState(12); // Default to 12 for desktop
  const [width, setWidth] = useState(1200); // Default width for desktop

  // Function to calculate layout based on the number of columns
  const generateLayout = (cols) => {
    return products.map((item, index) => ({
      i: index.toString(),
      x: (index % cols) * (12 / cols), // Calculate x based on the number of columns
      y: Math.floor(index / cols) * 2, // Adjust the height based on the row
      w: 12 / cols, // width of each grid item
      h: 3, // height of each grid item
    }));
  };

  // Update layout and grid properties on mount and window resize
  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
      
      
      if (screenWidth <= 768) { // Mobile View
        setCols(6); // 2 items per row in mobile, hence 6 columns in a 12 column grid
        setWidth(600); // Adjust width for mobile
        setLayout(generateLayout(2)); // Generate layout for 2 items per row
      } else { // Desktop View
        setCols(12); // 4 items per row in desktop
        setWidth(1200); // Adjust width for desktop
        setLayout(generateLayout(4)); // Generate layout for 4 items per row
      }
    };

    updateLayout(); // Initialize on mount
    window.addEventListener('resize', updateLayout); // Add event listener for resize

    return () => window.removeEventListener('resize', updateLayout); // Cleanup on unmount
  }, [products]); // Depend on products to regenerate layout when products change

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={cols} // Dynamic columns
      rowHeight={150} // Adjust based on design
      width={width} // Dynamic width
      isDraggable={false} // Disable dragging
      isResizable={false} // Disable resizing
    >
      {products.map((item, index) => (
        <div key={index} className="product-card">
          <img src={item.imgSrc} alt={item.title} className='shoppg-img' />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <div className="weight-options">
            <button>250g</button>
            <button>500g</button>
            <button>1kg</button>
          </div>
          <div className="quantity-selector">
            <button>-</button>
            <input type="number" defaultValue="1" min="1" />
            <button>+</button>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </GridLayout>
  );
};

// Define prop types
ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default ProductGrid;
