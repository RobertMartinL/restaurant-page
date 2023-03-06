import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerNav'>
            <div className='footerLeft'>
                <ul>
                    <li>Homepage</li>
                    <li>About Us</li>
                    <li>Menu</li>
                    <li>Hours & Location</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='footerRight'>
                <div className='socials'>
                    <a href="https://www.linkedin.com/in/robert-martin-400584244/"><BsLinkedin/></a>
                    <a href="https://instagram.com"><FiInstagram/></a>
                    <a href="https://github.com/robertmartinl"><FaGithub/></a>
                </div>
                <div className='createdBy'>created by Robert Martin</div>
            </div>
        </div>
    </div>
  )
}

export default Footer