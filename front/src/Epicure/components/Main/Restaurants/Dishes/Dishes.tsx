import React, { useState,useEffect } from "react";
import './Dishes.scss';
import { NavLink, useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import Dish from "../../../../types/Dish";
import Restaurant from "../../../../types/Restaurant";
import DishCard from "../../../Shared/Cards/DishCrad";

function Dishes() {
const resData=useSelector((state:any) => state.restaurants.restaurants);  
const dishesData=useSelector((state:any) => state.dishes.dishes);  
const chefsData=useSelector((state:any) => state.chefs.chefs);  
const params=useParams<any>();
const [dishes, setDishes] = useState<Dish[]>([]);
const [restaurant, setRestaurant] = useState<Restaurant|any>();
const [chef, setChef] = useState<any>();


useEffect(() => {
    for(let item of resData){
        if(item._id==params?.restaurantId){
            setRestaurant(item);
            for(let ind of item.dishes_id){
                for(let dish of dishesData){
                    if(ind==dish.id){
                        setDishes((currentArray:any) => [...currentArray, dish])
                    }
                }
            }
            for (let ch of chefsData) {
                if (ch.id === item.chef_id) {
                    setChef(ch);
                }
              }
        }
    }
},[]);

function activeElement(){
    
}
return (
        <section className="dishes">
            <img className="title-img" src="./../images/dishes/rectangle3.png"/>
            {restaurant && 
            <section className="header-dishes">
                <span className="restaurant-title">{restaurant.name}</span><br/>
                <span className="restaurant-chef">{chef.name}</span>
            </section>
            }
            <div className="menu">
                <a onClick={activeElement} className="btn-menu Text-Style-2">
                    Breakfast
                </a>
                <a onClick={activeElement} className="btn-menu Text-Style-2 ">
                    Launch
                </a>
                <a onClick={activeElement} className="btn-menu Text-Style-2">
                    Dinner
                </a>
            </div>
            <div className="all-dishes">
                {dishes.length > 0 &&
                dishes.map((item, index) => {
                    return (
                    // <section className="dishes-section" key={item.id}>
                        <DishCard key={item.id} name={item.name} description={item.description} src={item.src} price={item.price} type={item.type}/>
                    // </section>
                        
                    );
                })}
            </div>
        </section>
);
}

export default Dishes


