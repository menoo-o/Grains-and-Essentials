import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section foot-about">
          <h3>Healthy Living, Sustainable Giving</h3>
          <p>
            Living well extends beyond nutrition; it's about our planet too. Our
            premium products nourish both body and Earth.
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} alt="Instagram" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} alt="YouTube" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Grain & Essentials. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;