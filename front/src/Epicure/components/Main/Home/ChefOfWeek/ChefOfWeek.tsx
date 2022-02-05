import React, { useEffect, useState } from "react";
import "./ChefOfWeek.scss";
import Chef from "../../../../types/Chef";
import {useSelector} from 'react-redux'
//./src/Epicure/components/Main/Home/ChefOfWeek
function ChefOfWeek() {
  const [chefOfWeek, setChefOfWeek] = useState<any>();
  const [chefsRestaurants, setChefsRestaurants] = useState<any>([]);
  const chefs=useSelector((state:any) => state.chefs.chefs);
  const res=useSelector((state:any) => state.restaurants.restaurants);
  useEffect(() => {
    const chef_of_week= chefs.filter((item:any) => {
      return item.chefOfWeek === true;
    });
    setChefOfWeek(chef_of_week[0]);
    for (let item of res) {
      if (chef_of_week[0].restaurants_id.includes(item.chef_id)) {
        setChefsRestaurants((currentArray:any) => [...currentArray, item])
      }
    }
    
  }, []);

  return (
    <div className="chef-of-week">
      <span className="chef-title">CHEF OF THE WEEK :</span>
      <br />
      <div className="chef-info">
        {chefOfWeek && <img className="chef-img" src={`./images/chefs/${chefOfWeek.src}`}/>}
        <span className="chef-description">
          Chef Yossi Shitrit has been living and breathing his culinary dreams for
          more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </span>
      </div>
      <span className="chef-res-name">{chefOfWeek?.name}'s restaurants</span>
      <div className="card-res-chef">
        {chefsRestaurants.length > 0 &&
          chefsRestaurants.map((item:Chef, index:number) => {
            return (
              <div key={index} className="card-res-chef-frame">
                <img className="card-res-chef-img" src={`./images/restaurants/${item.src}`}/>
                <div className="card-res-chef-text"><label className="name-label">{item.name}</label></div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default ChefOfWeek;
