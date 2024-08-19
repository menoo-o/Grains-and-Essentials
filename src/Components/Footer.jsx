import '../App.css'; // 
import Subscribe from './Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Use `@fortawesome/free-brands-svg-icons` for brand icons

const Footer = () => {
  return (
    <>
        <footer>
        <Subscribe />
        <div className='footer-container'>
          <div className='footer-top'>
            <div className='footer-section'>
              <h3>About Us</h3>
              <p>Your one-stop shop for grains, essentials, and more. We prioritize quality and sustainable products.</p>
            </div>
            <div className='footer-section'>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className='footer-section'>
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className='footer-section'>
              <h3>Follow Us</h3>
              <div className='social-icons'>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
            </div>
          </div>
          
          <div className='footer-bottom'>
            <p>&copy; 2024 Grains & Essentials. All Rights Reserved.</p>
          </div>
        </div>
        </footer>
        
    </>
  );
};

export default Footer;
