import React from 'react';
import HeroNav from '../HeroNav';
import './featured.css';

const Featured = () => {
  return (
    <>
    <div className='featuredContainer'>
      <div className='featuredHero'></div>
      <div className='heroText'>
        <h1>Try Something New Today</h1>
        <h2>Come in and try one of our all new menu items!</h2>
        <h2>This week we're introducing our delicious fish tacos</h2>
      </div>
    </div>
    <HeroNav/>
    </>
  )
}

export default Featured