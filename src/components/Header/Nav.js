import React from 'react';
import { Link } from 'react-router-dom'
import './nav.css';

const Nav = () => {
  return (
    <div className='nav'>
        <ul>
            <li><Link to='About'><button>About Us</button></Link></li>
            <li><Link to='Menu'><button>Menu</button></Link></li>
            <li><Link to='Hours'><button>Hours & Location</button></Link></li>
        </ul>
    </div>
  )
}

export default Nav