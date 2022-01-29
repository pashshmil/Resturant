import React from 'react';
import './Icons.scss';

function Icons() {
  return (
    <div className="icons">
      <span className="THE-MEANING-OF-OUR-I">
        THE MEANING OF OUR ICONS :
      </span>
      <div className='icons-frame'>
        <img className="type-icon" src='./images/icons/dishes-types/spicy.png'/>
        <img className="type-icon" src='./images/icons/dishes-types/vegetarian.png'/>
        <img className="type-icon" src='./images/icons/dishes-types/vegan.png'/>
      </div>
    </div>
  );
}

export default Icons
