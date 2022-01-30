import React, { useState,useEffect } from "react";
import './Dishes.scss';
import { useParams } from "react-router-dom";
import restaurantsJson from "../../../../../assets/data/restaurants.json";
import dishesJson from "../../../../../assets/data/dishes.json";
import Dish from "../../../../types/Dish";
import Restaurant from "../../../../types/Restaurant";
import DishCard from "../../../Shared/Cards/DishCrad";

function Dishes() {
  
const params=useParams<any>();
const [dishes, setDishes] = useState<Dish[]>([]);
const [restaurant, setRestaurant] = useState<Restaurant|any>();


useEffect(() => {
    for(let item of restaurantsJson){
        if(item.id==params?.restaurantId){
            setRestaurant(item);
            for(let ind of item.dishes_id){
                for(let dish of dishesJson){
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


