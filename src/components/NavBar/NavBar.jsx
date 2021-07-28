import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => (
  <>
  <div className="navContainer">
  <div className="navbar">
  <Link to="/" >
  <div>
  <img  className="navbar__logo" src="https://gabobranding.cl/wp-content/uploads/2020/09/Logo-bco@2x.png" alt="" />
  </div>
  </Link>ß
  <nav>
  <ul className="navbar__menu">
    <li><Link to="/category/new-arrivals">New Arrivals</Link></li>
    <li><Link to="/category/men">Men</Link></li>
    <li><Link to="/category/women">Women</Link></li>
    <li><Link to="/contacto">Contacto</Link></li>
  </ul>
  </nav>
  </div>
  <Link to="/cart">
  <CartWidget />
  </Link>
  </div>
  </>
);

export default NavBar;
