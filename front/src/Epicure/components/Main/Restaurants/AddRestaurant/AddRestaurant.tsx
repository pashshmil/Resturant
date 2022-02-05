import React, { useEffect, useRef, useState } from "react";
import './AddRestaurant.scss';
import {useDispatch,useSelector} from 'react-redux'
import Modal from "react-modal";
import { postRestaurantsData } from "../../../../store/restuarants.actions";

const  AddRestaurant:React.FC<{onCloseModal:(()=>void) ,IsModalOpened:boolean}>=(props)=>{
    const dispatch=useDispatch();
    const chefs=useSelector((state:any) => state.chefs.chefs);
    const name_input=useRef<any>('');
    const chef_id=useRef<any>('');
    const submitHandler = (event: any) =>{
        event.preventDefault();
        //post restaurnats
        dispatch(postRestaurantsData({name:name_input.current.value,chef_id:+chef_id.current.value,src:'claro.png',dishes_id:[1,2],popular:false,signuture_dish_id:1}));
        onModalClose();
    }
    
    function onModalClose() {
        props.onCloseModal();
    }
    return (
    <Modal isOpen={props.IsModalOpened} className='add-res-modal'>
        <button className="close-btn" onClick={onModalClose}>x</button>
        <form onSubmit={submitHandler} className="login-form">
            <div className='form-control'>
                <label htmlFor='name'>Name:  </label><br/>
                <input ref={name_input} className='input' type="text" id="name"/>
            </div>
            
            <div className='form-control'>
                <label htmlFor='name'>Chef:  </label><br/>
                <select ref={chef_id} className="drop-down">
                <option> </option>
                {chefs.map((chef:any) => (
                    <option
                    key={chef.id}
                    value={chef.id}
                    >
                    {chef.name}
                    </option>
                ))}
                </select>
            </div>

            <div className='form-action'>
                <button className='btn'>Submit</button>
            </div>
        </form>
    </Modal>
  )
}
// name: request.body.name, 
//                 chef_id:request.body.chef_id,
//                 dishes_id:request.body.dishes_id,
//                 popular:request.body.popular,
//                 signuture_dish_id:request.body.signuture_dish_id ,
//                 src: request.body.src
export default AddRestaurant
