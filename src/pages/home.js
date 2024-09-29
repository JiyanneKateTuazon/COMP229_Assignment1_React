// src/pages/Home.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */

import React from 'react';
import './Home.css';
import profilePic from '../assets/jiyanne_pic';

const Home = () => (
  <div className="home">
    <div className="home-content">
      <div className="home-image">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="home-text">
        <h1>Welcome to My Portfolio</h1>
        <p>My mission as a graphic designer and web developer who aims to create immersive digital experiences, elevate brands, and foster meaningful connections between businesses and their audiences. I am committed to creativity, functionality, and user-centric design principles.</p>
        <a href="/about" className="btn">Learn More About Me</a>
      </div>
    </div>
  </div>
);

export default Home;