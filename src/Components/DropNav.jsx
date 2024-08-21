import './DropNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function DropNav() {
  return (
    <Navbar>     
     <NavItem icon={<FontAwesomeIcon icon={faArrowDown} />}>
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
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">

          <DropdownItem>Home</DropdownItem>

          <DropdownItem
            goToMenu="shop">
            Shop
          </DropdownItem>

          <DropdownItem
           
            goToMenu="contact">
            Contact Us
          </DropdownItem>

          <DropdownItem>Blogs</DropdownItem>
          <DropdownItem>About Us</DropdownItem>
          <DropdownItem>Login</DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'shop'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={ <FontAwesomeIcon icon={faArrowLeft} /> }>
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

      <CSSTransition
        in={activeMenu === 'contact'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
            <h2>Contact Us</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">WhatsApp</DropdownItem>
          <DropdownItem leftIcon="🐸">Instagram</DropdownItem>
          <DropdownItem leftIcon="🦋">Facebook</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropNav;