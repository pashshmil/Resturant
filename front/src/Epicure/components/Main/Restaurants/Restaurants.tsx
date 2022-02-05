import React, { useEffect, useState } from "react";
import './Restaurants.scss';
import RestaurantCard from "../../Shared/Cards/RestaurantCard";
import {useSelector} from 'react-redux'
import AddRestaurant from "./AddRestaurant/AddRestaurant";

function Restaurants() {
  const [restaurants, setRestaurants] = useState<{ id:number,name: string, chef: string,src:string }[]>([]);
  const res=useSelector((state:any) => state.restaurants.restaurants);
  const chef=useSelector((state:any) => state.chefs.chefs);
  const [modalIsOpen,setModalIsOpen] = useState(false);

  useEffect(() => {
    res.map((item:any) => {
      for (let ch of chef) {
        if (ch.id === item.chef_id) {
          setRestaurants((currentArray:any) => [...currentArray, { name: item.name, chef: ch.name,src:item.src,id:item._id }])
        }
      }
    });
  },[res,chef]);
   
  function toggleModal() {
    setModalIsOpen(!modalIsOpen );
  }

  return (
  <section>
    <button className="res-btn" onClick={toggleModal}>Add Restaurant</button>
    <div className="cards">
      {restaurants.length > 0 &&
        restaurants.map((item, index) => {
          return (
            <section key={index}>
              <RestaurantCard  name={item.name} chef={item.chef} src={item.src} id={item.id} />
            </section>
          );
        })}
    </div>
    <AddRestaurant IsModalOpened={modalIsOpen} onCloseModal={toggleModal}/>
  </section>
  )
}
export default Restaurants
