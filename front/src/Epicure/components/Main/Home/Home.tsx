import React from 'react';
import Dishes from './SigntureDishes/SigntureDishes';
import PopularResturants from './Popular-Restaurants/Popular-Restaurants';
import AboutUs from './About_us/AboutUs';
import ChefOfWeek from './ChefOfWeek/ChefOfWeek';
import './Home.scss';
import Icons from './Icons/Icons';
import Search from './Search/Search';

function Home() {
  return (
    <section>
      <Search/>
      <div className="frame popular-restaurants-frame">
        <PopularResturants/>
      </div>
      <div className='frame signure-dishes-frame'>
        <Dishes />
      </div>
      <Icons/>
      <div className="chef-of-week-frame">
        <ChefOfWeek/>
      </div>
      <AboutUs/>
     </section>
  );
}

export default Home
