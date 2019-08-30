import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarStyle= {
  letterSpacing: ".15rem",
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'Rock Salt',
  fontSize: '.8rem'
}

const activeStyle = {
  fontWeight: "bold",
  color: "white"
}

function Navbar() {
  return (
    <nav className="nav">
      <ul style={{display: 'flex', paddingLeft: "0", width: '40%', justifyContent: 'space-between', listStyleType: 'none', textTransform: "uppercase", fontWeight: 'bold', color: 'black'}}>
        <li><NavLink to='/' exact activeStyle={activeStyle} style={navbarStyle}>Home</NavLink></li>
        <li><NavLink to='/about' activeStyle={activeStyle} style={navbarStyle} >About</NavLink></li>
        <li><NavLink to='/books' activeStyle={activeStyle} style={navbarStyle}>Books</NavLink></li>
        <li><NavLink to='/contact' activeStyle={activeStyle} style={navbarStyle}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar