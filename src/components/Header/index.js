import React from 'react'
import Nav from './Nav'
import './header.css'
import robLogo from '../../assets/robLogo.jpg'

const Header = () => {
  return (
    <>
      {/* <div className='redBar'></div> */}
      <div className='header'>
          <img className='logoImg' src={robLogo} alt='Robs Bar & Grill'/>
          <Nav/>
      </div>
      <div className='redBar'></div>
    </>
  )
}

export default Header