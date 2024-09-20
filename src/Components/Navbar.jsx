import '../App.css'
import '../Components/Nav.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropNav from './DropNav';
import { faUser, faCartShopping, faMagnifyingGlass,  faCheck, faLeaf, faTruckFast, faCube } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../contexts/CartContext'; // Import your Cart context

function Navbar(){
     const { cartItems } = useCart(); // Access cartItems from context
    // Calculate total number of items in the cart
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);


  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Contact Us', path: '/contact' },

  ];
return (
  <>
      <nav>
        <section className="nav-bar">

        <div className='bars'>
            <DropNav />
        </div>

          <div className="logo">
             <NavLink to='/'> 
             <img src="/logo 1.2.png" alt="logo" />
             </NavLink>
              
          </div>

          <div className="nav-links">
            {routes.map((route) => (
              <NavLink 
                key={route.path} 
                to={route.path} 
                activeClassName="active-link"
                exact={route.path === '/'}
              >
               {route.name}
              </NavLink>
      ))}
    </div>

          <div className="search">
               <a href="#"> <FontAwesomeIcon icon={faMagnifyingGlass}  />  </a>
               <NavLink to="/cart" className="cart-link">
               {/* the cart icon in navbar imported from fontawesome */}
               <FontAwesomeIcon icon={faCartShopping} />

                  {/* Badge showing the number of items in the cart */}
                  {totalItemsInCart > 0 && (
                    <span className="cart-badge">{totalItemsInCart}</span>
                  )}
                </NavLink>
                <NavLink to='login'>
                 <FontAwesomeIcon icon={faUser} className='fa-user'  /> 
                </NavLink>
               
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
                <p className="icon-text" > <FontAwesomeIcon icon={faCheck} className="icons-links" /> Free shipping</p>
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