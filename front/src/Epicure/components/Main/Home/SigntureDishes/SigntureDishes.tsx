import React, { useEffect, useState } from "react";
import './SigntureDishes.scss';
import DishCard from "../../../Shared/Cards/DishCrad";
import Dish from "../../../../types/Dish";
import {useSelector} from 'react-redux'

function Dishes() {
  const [signtureDish, setSigntureDish] = useState<Dish[]>([]);
  const dishesData=useSelector((state:any) => state.dishes.dishes);  
  const res=useSelector((state:any) => state.restaurants.restaurants);
  useEffect(() => {
    const restaurant = res.filter((item:any) => {
      return item.popular === true;
    });
    res.map((item:any) => {
      for (let dish of dishesData) {
        if (dish.id === item.signuture_dish_id) {
          console.log("dish check ",dish);
          setSigntureDish((currentArray:any) => [...currentArray, { dish }])
        }
      }
    });
  }, []);
  return (
  <section>
    <span className="title Text-Style-9">
      SIGNTURE DISH OF:
    </span>
    <div className="dishes-cards">
      {signtureDish.length > 0 &&
        signtureDish.map((item, index) => {
          return (
            <section key={index}>
              <DishCard  name={item.name} description={item.description} src={item.src} price={item.price} type={item.type}/>
            </section>
          );
        })}
    </div>
  </section>
  );
}

export default Dishes
