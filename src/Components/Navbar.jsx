import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass,  faCheck, faLeaf, faTruckFast, faCube, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
return (
  <>
      <nav>
        <section className="nav-bar">
          <div className='bars'>
            <button className='btn-bars' type='button'><FontAwesomeIcon icon={faBars} className='bars-icon' /></button>
          </div>
          <div className="logo">
              <img src="/logo.jpg" alt="logo" />
          </div>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Shop</a>
              <a href="#">Blog</a>
              <a href="#">Recipes</a>
              <a href="#">Contact</a>
            </div>

            <div className="search">
               <a href="#"> <FontAwesomeIcon icon={faMagnifyingGlass}  />  </a>
               <a href="#"> <FontAwesomeIcon icon={faCartShopping} /> </a>
               <a href="#"> <FontAwesomeIcon icon={faUser} className='fa-user'  />  </a>
            </div>
        </section>

        <section className="mini-nav">
          <div className="icons">
              <div className="icon1">
                  <p className="icon-text" > <FontAwesomeIcon icon={faCheck} className="icons-links" />Free shipping</p>
              </div>           
              <div className="icon2 leaf">
                <p className="icon-text"><FontAwesomeIcon icon={faLeaf} className="icons-links"/>100% Plastic-Free</p>
              </div> 
              <div className="icon3">
                  <p className="icon-text"><FontAwesomeIcon icon={faCube} className="icons-links" />Delievering in Islamabad</p>
              </div>
              <div className="icon4">
                  <p className="icon-text"><FontAwesomeIcon icon={faTruckFast} className="icons-links" />Swift delivery</p>
              </div>
          </div>
        </section>

        <div className="main__container">
        
        <section className="enable-animation">

          <div className="marquee">
            <ul className="marquee__content">
              <div className=" marquee__item">
                <p className="icon-text" > <FontAwesomeIcon icon={faCheck} className="icons-links" />Free shipping</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faLeaf} className="icons-links"/>100% Plastic-Free</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faCube} className="icons-links" />Delievering in Islamabad</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faTruckFast} className="icons-links" />Swift delivery</p>
              </div>
            </ul>
  
            <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
                <p className="icon-text" > <FontAwesomeIcon icon={faCheck} className="icons-links" />Free shipping</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faLeaf} className="icons-links"/>100% Plastic-Free</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faCube} className="icons-links" />Delievering in Islamabad</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faTruckFast} className="icons-links" />Swift delivery</p>
              </div>
            </ul>
          </div>
        </section>
      </div>


  </nav>
  </>
)}
export default Navbar