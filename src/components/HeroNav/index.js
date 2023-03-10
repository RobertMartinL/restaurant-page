import React from 'react';
import { Link } from 'react-router-dom';
import './heroNav.css';

const HeroNav = () => {
  return (
    <div className='container'>
        <ul>
            <li className='miniHero' id='happyHour'>
                <Link to='/'><h2>HappyHour</h2></Link>
            </li>
            <li className='miniHero' id='featured'>
                <Link to='/Featured'><h2>Featured</h2></Link>
            </li>
            <li className='miniHero' id='events'>
                <Link to='/Events'><h2>Events</h2></Link>
            </li>
        </ul>
    </div>
  )
}

export default HeroNav