import './DropNav.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function DropNav() {
  return (
    <Navbar>     
     <NavItem icon={<FontAwesomeIcon icon={faBars} className='bars-icon' /> }>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
};

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span>{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  DropdownItem.propTypes = {
    goToMenu: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
  };

  return (
    // <div className="dropdown" style={{ height: '70vh' }} ref={dropdownRef}>
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}> 

<CSSTransition
  in={activeMenu === 'main'}
  timeout={600}
  classNames="menu-primary"
  unmountOnExit
  onEnter={calcHeight}>
  <div className="menu">

    <DropdownItem>Home</DropdownItem>

    <DropdownItem goToMenu="shop">Shop</DropdownItem>

    <DropdownItem>Contact Us</DropdownItem>

    <DropdownItem>Blogs</DropdownItem>
    <DropdownItem>About Us</DropdownItem>
    <DropdownItem>Login</DropdownItem>

    {/* Social Media Icons in a Row */}
    <div className="social-media-icons">
      <DropdownItem leftIcon={<FontAwesomeIcon icon={faWhatsapp} className='icon-left' />} />
      <DropdownItem leftIcon={<FontAwesomeIcon icon={faInstagram} className='icon-left' />} />
      <DropdownItem leftIcon={<FontAwesomeIcon icon={faFacebook} className='icon-left' />} />
      <DropdownItem leftIcon={<FontAwesomeIcon icon={faYoutube} className='icon-left' />} />
    </div>

  </div>
</CSSTransition>


      <CSSTransition
        in={activeMenu === 'shop'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={ <FontAwesomeIcon icon={faArrowLeft} className='icon-left'/>  }>
            <h2>Categories</h2>
          </DropdownItem>
          <DropdownItem >Grains & Cereals</DropdownItem>
          <DropdownItem >Rice</DropdownItem>
          <DropdownItem >Lentils & Beans</DropdownItem>
          <DropdownItem >Cooking & Baking</DropdownItem>
          <DropdownItem >Herbs & Spices</DropdownItem>
          <DropdownItem >Organic Sweetners</DropdownItem>
          <DropdownItem >Dried Fruits & Nuts</DropdownItem>
          <DropdownItem >Storage Essentials</DropdownItem>
        </div>
      </CSSTransition>

      {/* <CSSTransition
        in={activeMenu === 'contact'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faArrowLeft} className='icon-left' />}>
            <h2>Contact Us</h2>
          </DropdownItem>
          
        </div>
      </CSSTransition> */}
    </div>
  );
}

export default DropNav;