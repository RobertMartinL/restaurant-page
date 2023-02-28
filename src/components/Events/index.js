import React from 'react';
import './events.css';
import HeroNav from '../HeroNav';

const Events = () => {
  return (
    <>
    <div className='eventsContainer'>
      <div className='eventsHero'>Hero</div>
      <div className='heroText'>
        <h1>Celebrate Good Times With Us</h1>
        <h2>Book our private room for your next event</h2>
        <h2>Reach us at events@robsbarandgrill.com</h2>
      </div>
    </div>
    <HeroNav/>
    </>
  )
}

export default Events