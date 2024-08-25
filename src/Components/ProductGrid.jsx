import React from 'react';
import GridLayout from 'react-grid-layout';
import '../App.css'; // You'll define your custom styles here

const ProductGrid = ({ products }) => {
  // Define the layout for 16 items on a grid, each with a width of 1 and height of 2 units
  const layout = products.map((item, index) => ({
    i: index.toString(),
    x: (index % 4) * 3, // 4 items per row, adjust if needed
    y: Math.floor(index / 4) * 2, // Adjust the height based on the row
    w: 3, // width of each grid item
    h: 2, // height of each grid item
  }));

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12} // 12 columns total
      rowHeight={150} // adjust based on design
      width={1200} // adjust to fit your container width
      isDraggable={false}  // Disable dragging
      isResizable={false}  // Disable resizing
    >
      {products.map((item, index) => (
        <div key={index} className="product-card">
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
            <input type="number" defaultValue="1" min="1" />
            <button>+</button>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </GridLayout>
  );
};

export default ProductGrid;
