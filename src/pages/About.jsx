import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-heading'>
          <h1>ABOUT GRAINS & ESSENTIALS</h1>
        </div> 

        <div className='who-are-we'>
          <h2>OUR STORY</h2>
          <p>Founded in 1950 in Rawalpindi, Pakistan, we began as a humble wholesaler of grains and pulses. Over the years, we expanded our range and evolved into a manufacturer and wholesaler, dedicated to quality and customer satisfaction.</p>
        </div>

        <div className='about-para'>
          <h2>OUR COMMITMENT</h2>
          <p>We source high-quality grains and essentials, ensuring transparency and sustainability. Our passion for health drives us to deliver the best products, from organic grains to gluten-free oats.</p>
          <p> Explore our <NavLink to="/shop" className="btn-explore">collection</NavLink> and discover the difference decades of expertise make. Thank you for choosing G & E. Join us in celebrating our heritage and passion for grains.</p>       
        </div>
      </div>
    
    </>
  );
}

export default About;