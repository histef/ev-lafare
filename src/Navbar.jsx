import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarStyle= {
  letterSpacing: ".15rem",
  textDecoration: 'none',
  color: 'black'
}

function Navbar() {
  return (
    <nav className="nav">
      <ul style={{display: 'flex', width: '30%', justifyContent: 'space-between', listStyleType: 'none', textTransform: "uppercase", fontWeight: 'bold', color: 'black'}}>
        <li><NavLink to='/' style={navbarStyle}>Home</NavLink></li>
        <li><NavLink to='/about'style={navbarStyle} >About</NavLink></li>
        <li><NavLink to='/books' style={navbarStyle}>Books</NavLink></li>
        <li><NavLink to='/contact' style={navbarStyle}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar