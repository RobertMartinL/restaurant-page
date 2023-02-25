import React from 'react';
import { Link } from 'react-router-dom'
import './heroNav.css';

const HeroNav = () => {
  return (
    <div className='container'>
        <ul>
            <li className='miniHero'>
                <Link to='/'>happyHour</Link>
            </li>
            <li className='miniHero'>
                <Link to='/Events'>Events</Link>
            </li>
        </ul>
    </div>
  )
}

export default HeroNav