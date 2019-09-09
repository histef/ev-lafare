import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarStyle= {
  letterSpacing: ".15rem",
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'Rock Salt',
  fontSize: '1rem'
}

const activeStyle = {
  fontWeight: "bold",
  color: "white"
}

function Navbar() {
  return (
    <nav className="nav">
      <ul style={{zIndex: '2', position: 'fixed', display: 'flex', width: '55%', justifyContent: 'space-between', listStyleType: 'none', fontWeight: 'bold', color: 'black'}}>
        <li><NavLink to='/' exact activeStyle={activeStyle} style={navbarStyle}>home</NavLink></li>
        <li><NavLink to='/about' activeStyle={activeStyle} style={navbarStyle}>about</NavLink></li>
        <li><NavLink to='/books' activeStyle={activeStyle} style={navbarStyle}>books</NavLink></li>
        <li><NavLink to='/contact' activeStyle={activeStyle} style={navbarStyle}>contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar