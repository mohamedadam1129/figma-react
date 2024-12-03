import solid from '../src/assets/solid logo.svg';    // Ensure the path is correct
import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-left">
        <a href="#" className="navbar-logo">
          <img src={solid} alt="Navbar Logo" className="logo-image" />
        </a>
        <a href="#" className="navbar-features">Features</a>
      </div>
      <div className="navbar-right">
        <p>Dark mode</p>
        <label className="switch">
          <input 
            type="checkbox" 
            id="darkmodetoggle" 
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider round"></span>
        </label>

        <a href="#" className="navbar-button">
          <span>Sign in / up</span>
        </a>
        
        <button className="btn-mobile">Button </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
