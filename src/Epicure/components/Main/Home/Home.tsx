import React from 'react';
import Dishes from '../Dishes/Dishes';
import Resturants from '../Restaurants/Restaurants';
import AboutUs from './About_us/AboutUs';
import ChefOfWeek from './ChefOfWeek/ChefOfWeek';
import './Home.scss';
import Icons from './Icons/Icons';
import Search from './Search/Search';

function Home() {
  return (
    <section>
      <Search/>
      <Resturants/>
      <Dishes/>
      <Icons/>
      <ChefOfWeek/>
      <AboutUs/>
     </section>
  );
}

export default Home
