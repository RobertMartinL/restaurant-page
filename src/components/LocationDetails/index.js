import React from 'react';
import './locationDetails.css';

const LocationDetails = () => {
  return (
    <div className='detailsContainer'>
      <div className='smContainer'>
        <div className='hours'>
          <h1>Hours</h1>
          <div className='times'>
            <h2>Monday : Closed <br/>Tuesday-Saturday : 11AM-5PM<br/>Sunday : 11AM-3PM</h2>
          </div>
        </div>
        <div className='location'>
        <iframe title='myFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.334272037926!2d-90.04088688456599!3d30.02726652633813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a67f60724989%3A0x47883f82de183ae8!2sThe%20Munch%20Factory!5e0!3m2!1sen!2sus!4v1678459796685!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default LocationDetails