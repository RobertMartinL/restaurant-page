import React from 'react';
import foodItem from '../../assets/tacos.jpg';
import './menu.css';

const Item = ({name, desc}) => {
  return (
    <>
        <div className='itemCard'>
          <div className='center'>
            <img className='foodItemImg' src={foodItem} alt='food' />
          </div>
          <div className='subcard'>
            <h3 dishName>{name}</h3>
            <p className='description'>{desc}</p>
          </div>
        </div>
    </>
  )
}

export default Item