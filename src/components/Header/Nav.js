import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className='nav'>
        <ul>
            <li><Link to='About'>About Us</Link></li>
            <li><Link to='LocationDetails'>Hours & Location</Link></li>
            <li><Link to='Menu'>Menu</Link></li>
        </ul>
    </div>
  )
}

export default Nav