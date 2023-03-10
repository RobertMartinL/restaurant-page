import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './header.css';
import robLogo from '../../assets/robLogo.jpg';

const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to='/' id='logo'>
          <img className='logoImg' src={robLogo} alt='Robs Bar & Grill'/>
        </Link>
          <Nav/>
      </div>
      <div className='redBar'></div>
    </>
  )
}

export default Header