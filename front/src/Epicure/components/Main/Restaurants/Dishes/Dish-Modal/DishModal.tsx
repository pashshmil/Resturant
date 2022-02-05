import React, { useState } from "react";
import './DishModal.scss';
import Modal from "react-modal";

const DishModal:React.FC<{onCloseModal:(()=>void) ,IsModalOpened:boolean,type:string,name: string; price:number; src: string; description:string}>=(props)=> {
  const path='./../images/icons/dishes-types/'+ props.type +'.png'

  function onModalClose() {
    // let data = { name: 'example', type: 'closed from child' };
    props.onCloseModal();
  }
  return (
    <div>
    <Modal isOpen={props.IsModalOpened} className='dish-modal'>
      <button className="close-btn" onClick={onModalClose}>x</button>
      <section className="main-dish-modal" >
        <img className="dish-modal-img" src={`./../images/dishes/rectangle3.png`}/>
        <div className="dish-modal-text">
          {props.type!=='' ? <img className="dish-icon" src={path}/>: <div className='dish-icon'></div>}
          <span className="dish-modal-name">{props.name}</span><br/>
          <div className="dish-modal-description">{props.description}</div><br/>
          <div className="dish-modal-price"><hr/>&#8362;{props.price}<hr/></div>
          <div>
            <input type="radio" value="Male" name="gender" /> Whire Bread<br/>
            <input type="radio" value="Female" name="gender" /> Sticky bread
          </div>
          <button className="modal-add-btn">Add To Bag</button>
        </div>
      </section>    
    </Modal>
    </div>
  ); 
}

export default DishModal
