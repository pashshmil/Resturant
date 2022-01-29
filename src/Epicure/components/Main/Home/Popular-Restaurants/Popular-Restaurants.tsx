import React, { useEffect, useState } from "react";
import "./Popular-Restaurants.scss";
import restaurantsJson from "../../../../../assets/data/restaurants.json";
import chefsJson from "../../../../../assets/data/chefs.json";
import RestaurantCard from "../../../Shared/Cards/RestaurantCard";
import { NavLink } from "react-router-dom";

function Resturants() {
  const [popularRestaurants, setpopularRestaurants] = useState<{ name: string, chef: string,src:string }[]>([]);
  useEffect(() => {
    const restaurants = restaurantsJson.filter((item) => {
      return item.popular === true;
    });
    const arr:any[]=[];
    restaurants.map((item) => {
      for (let chef of chefsJson) {
        if (chef.id === item.chef_id) {
          arr.push({ name: item.name, chef: chef.name,src:item.src });
        }
      }
    });
    setpopularRestaurants(arr);
  }, []);

  return (
    <section>
      <span className="title Text-Style-9">
        THE POPULAR RESTAURANTS IN EPICURE:
      </span>
      <div className="cards">
        {popularRestaurants.length > 0 &&
          popularRestaurants.map((item, index) => {
            return (
              <section key={index}>
              <RestaurantCard  name={item.name} chef={item.chef} src={item.src}/>
              </section>
            );
          })}
      </div>
      <NavLink className="all-restaurants-link" to="/restaurants">
          All Restaurants&gt;&gt;
      </NavLink>
    </section>
  );
}

export default Resturants;
