import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Categories = () => {
  return (
    <>
      <section className="collection categories">
        <div className="list">
          {/* Grains and Flour */}
          <NavLink to="/shop?category=Grains%20%26%20Flour" className="image-container grains-cereals">
            <img src="/categories/AdobeStock_629085287_Preview.jpeg" alt="grains and flour" width="200" height="200" />
            <div>
              <p>Grains and Flour</p>
            </div>
          </NavLink>

          {/* Rice */}
          <NavLink to="/shop?category=Rice" className="image-container Rice">
            <img src="/categories/rice.jpeg" alt="rice" width="200" height="200" />
            <div>
              <p>Rice</p>
            </div>
          </NavLink>

          {/* Lentils and Beans */}
          <NavLink to="/shop?category=Lentils" className="image-container lentils-beans">
            <img src="/categories/lentils `.jpg" alt="lentils and beans" width="200" height="200" />
            <div>
              <p>Lentils and Beans</p>
            </div>
          </NavLink>

          {/* Baking */}
          <NavLink to="/shop?category=Baking" className="image-container cooking-baking">
            <img src="/categories/eggs.jpeg" alt="cooking-baking" width="200" height="200" />
            <div>
              <p>Baking</p>
            </div>
          </NavLink>

          {/* Honey & Sweeteners */}
          <NavLink to="/shop?category=Sugar" className="image-container sugar">
            <img src="/categories/sugar.jpeg" alt="sugar" width="200" height="200" />
            <div>
              <p>Honey & Sweeteners</p>
            </div>
          </NavLink>

          {/* Storage Essentials */}
          <NavLink to="/shop?category=Storage" className="image-container jars">
            <img src="/categories/jars.jpeg" alt="jars" width="200" height="200" />
            <div>
              <p>Storage Essentials</p>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Categories;
