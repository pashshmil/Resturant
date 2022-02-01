import React, { useEffect, useState } from "react";
import './Restaurants.scss';
import restaurantsJson from "../../../../assets/data/restaurants.json";
import chefsJson from "../../../../assets/data/chefs.json";
import RestaurantCard from "../../Shared/Cards/RestaurantCard";
import ChefOfWeek from "../Home/ChefOfWeek/ChefOfWeek";

function Restaurants() {
  const [restaurants, setRestaurants] = useState<{ id:number,name: string, chef: string,src:string }[]>([]);
  // const [chefs, setChefs] = useState<{ id:number,name: string, chef: string,src:string }[]>([]);
  
  useEffect(() => {
    console.log("check 0");
    const fetchRestaurants=async()=>{
      const response=await fetch('https://localhost:3005/restaurants');
      const responseData=await response.json();
      console.log("check ",responseData);
      // for(const item in responseData){
      //   setRestaurants((currentArray:any) => [...currentArray, { id:item.id,name: item.name, chef: chef.name,src:item.src }])  
      // }
      fetchRestaurants();
    }
    
    
    // restaurantsJson.map((item) => {
    //   for (let chef of chefsJson) {
    //     if (chef.id === item.chef_id) {
    //       setRestaurants((currentArray:any) => [...currentArray, { id:item.id,name: item.name, chef: chef.name,src:item.src }])
    //     }
    //   }
    // });
    
  }, []);

  // function Check(event:any){
  //   console.log("event ",event.target.value);
  // }
  return (
  <div className="cards">
    {restaurants.length > 0 &&
      restaurants.map((item, index) => {
        return (
          <section key={index}>
            {/* <RestaurantCard  name={item.name} chef={item.chef} src={item.src} id={item.id} /> */}
          </section>
        );
      })}
  </div>
  )
}
export default Restaurants
