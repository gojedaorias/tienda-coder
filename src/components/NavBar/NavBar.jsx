import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => (
  <>
  <div className="navContainer">
  <div className="navbar">
  <div>
  <img className="navbar__logo" src="https://gabobranding.cl/wp-content/uploads/2020/09/Logo-bco@2x.png" alt="" />
  </div>
  <nav>
  <ul className="navbar__menu">
    <li><a href="/">New Arrivals</a></li>
    <li><a href="/">Men</a></li>
    <li><a href="/">Women</a></li>
    <li><a href="/">Contacto</a></li>
  </ul>
  </nav>
  </div>
  <CartWidget />
  </div>
  </>
);

export default NavBar;
