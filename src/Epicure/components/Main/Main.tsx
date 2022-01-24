import React from 'react';
import './Main.scss';
import Resturants from './Restaurants/Restaurants';
import Chefs from './Chefs/Chefs';
import Home from './Home/Home';

function Main() {
  return (
    <section>
      <Home/>
      {/* <Resturants/>
      <Chefs/> */}
    </section>
  );
}

export default Main
