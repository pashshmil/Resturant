import React, { useState } from "react";
import "./RestaurantCard.scss";
import { NavLink } from "react-router-dom";

const RestaurantCard: React.FC<{ name: string; chef: string; src: string,id:number }> = (
  props
) => { 
  return (
    <section>
      <NavLink to={`restaurants/${props.id}`} className="card-frame">
        <img className="card-img" src={`./images/restaurants/${props.src}`}/>
        <div className="card-text">
          <span className="restaurant-name">{props.name}</span><br/>
          <span className="chef-name">{props.chef}</span>
        </div>
      </NavLink>
    </section>

  );
};

export default RestaurantCard;
