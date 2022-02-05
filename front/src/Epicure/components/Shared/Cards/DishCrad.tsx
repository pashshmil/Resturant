import React,{useState,useEffect} from 'react';
import './DishCard.scss';
import Modal from "react-modal";
import DishModal from '../../Main/Restaurants/Dishes/Dish-Modal/DishModal';

const DishCard:React.FC<{name: string; price:number; src: string; type:string; description:string}>=(props)=> {
  const path='./../images/icons/dishes-types/'+ props.type +'.png'
  const [modalIsOpen,setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen );
  }

  return (
    <div  className="dish-card-frame" >
      <img className="dish-card-img" onClick={toggleModal} src={`./../images/dishes/${props.src}`}/>
      <div className="dish-card-text" onClick={toggleModal}>
        <span className="dish-name">{props.name}</span><br/>
        <div className="dish-description">{props.description}</div><br/>
          {props.type!=='' ? <img className="dish-icon" src={path}/>: <div className='dish-icon'></div>}
        <div className="dish-price"><hr/>&#8362;{props.price}<hr/></div>
      </div>
      <section>
            <DishModal IsModalOpened={modalIsOpen} onCloseModal={toggleModal} type={props.type} description={props.description} name={props.name} price={props.price} src={props.src}/>
        </section>
    </div>  
  );
}

export default DishCard;


