import React, { useState,useEffect } from "react";
import './Dishes.scss';
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import Dish from "../../../../types/Dish";
import Restaurant from "../../../../types/Restaurant";
import DishCard from "../../../Shared/Cards/DishCrad";

function Dishes() {
const resData=useSelector((state:any) => state.restaurants.restaurants);  
const dishesData=useSelector((state:any) => state.dishes.dishes);  
const params=useParams<any>();
const [dishes, setDishes] = useState<Dish[]>([]);
const [restaurant, setRestaurant] = useState<Restaurant|any>();


useEffect(() => {
// console.log("res ",resData);
// console.log("dishes ",dishesData);
    
// const resID=resData?.filter((item:any)=>{return item._id=params?.restaurantId});
// console.log("check ",resID);
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
        }
    }
},[]);
return (
    <div className="dishes">
        <img className="title-img" src="./../images/dishes/rectangle3.png"/>
        {restaurant && 
        <section className="header-dishes">
            <span className="restaurant-title">{restaurant.name}</span><br/>
            <span className="restaurant-chef">Moshe</span>
        </section>
        }
        <div className="all-dishes">
            {dishes.length > 0 &&
            dishes.map((item, index) => {
                return (
                <section key={item.id}>
                    <DishCard name={item.name} description={item.description} src={item.src} price={item.price} type={item.type}/>
                </section>
                  
                );
            })}
        </div>
    </div>
);
}

export default Dishes


