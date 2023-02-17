import React from 'react'
import burgerHero from '../../assets/burgerHero.jpg'

const Hero = () => {
  return (
    <div>
        <img className='heroImg' src={burgerHero} alt='Hamburger on a skillet'/>
    </div>
  )
}

export default Hero