import React, { useState } from "react";
import "./RestaurantCard.scss";
const RestaurantCard: React.FC<{ name: string; chef: string; src: string }> = (
  props
) => {
  return (
    <div className="card-frame">
      <img className="card-img" src={`./images/restaurants/${props.src}`}/>
      <div className="card-text">
        <span className="restaurant-name">{props.name}</span><br/>
        <span className="chef-name">{props.chef}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
