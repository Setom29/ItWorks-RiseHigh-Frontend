import React from 'react';
import './HogwartNavbar.css';
import { Link } from 'react-router-dom';

const HogwartNavbar = () => {
  return (
    <nav className="navbar">    
        <div className="navbar-link"><Link to="/">Home</Link></div>
        <div className="navbar-link"><Link to="/about">About</Link></div>
    </nav>
  );
}


export default HogwartNavbar;
