import React,{useState} from 'react';
import './DishCard.scss';

const DishCard:React.FC<{name: string; price:number; src: string; type:string; description:string}>=(props)=> {
  const path='./images/icons/dishes-types/'+ props.type +'.png'
  return (
    <div className="dish-card-frame">
      <img className="dish-card-img" src={`./images/dishes/${props.src}`}/>
      <div className="dish-card-text">
        <span className="dish-name">{props.name}</span><br/>
        <div className="dish-description">{props.description}</div><br/>
          {props.type!=='' ? <img className="dish-icon" src={path}/>: <div className='dish-icon'></div>}
        <div className="dish-price"><hr/>&#8362;{props.price}<hr/></div>
      </div>
  </div>
  );
}

export default DishCard;


