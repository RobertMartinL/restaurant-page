import React from 'react'
import burgerHero from '../../assets/burgerHero.jpg'
import './hero.css'

const Hero = () => {
  return (
    <div className='heroContainer'>
        <img className='heroImg' src={burgerHero} alt='Hamburger on a skillet'/>
        <div className='overlay'></div>
    </div>
  )
}

export default Hero