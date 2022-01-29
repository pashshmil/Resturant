import React, { useEffect, useState } from "react";
import './Dishes.scss';
import restaurantsJson from "../../../../../assets/data/restaurants.json";
import dishesJson from "../../../../../assets/data/dishes.json";
import DishCard from "../../../Shared/Cards/DishCrad";
import Dish from "../../../../types/Dish";

function Dishes() {
  const [signtureDish, setSigntureDish] = useState<Dish[]>([]);
  useEffect(() => {
    const restaurants = restaurantsJson.filter((item) => {
      return item.popular === true;
    });
    const arr:any[]=[];
    restaurants.map((item) => {
      for (let dish of dishesJson) {
        if (dish.id === item.signuture_dish_id) {
          arr.push(dish);
        }
      }
    });
    setSigntureDish(arr);
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
            <section key={item.id}>
            <DishCard  name={item.name} description={item.description} src={item.src} price={item.price} type={item.type}/>
            </section>
          );
        })}
    </div>
  </section>
  );
}

export default Dishes
