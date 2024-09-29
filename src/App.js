// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Services from './pages/services';
import Contact from './pages/contact';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;