// src/components/Header.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Nacelle_logo2.png'; 
import './Header.css';

const Header = () => (
  <header className="header">
    <img src={logo} alt="Logo" className="logo" />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;