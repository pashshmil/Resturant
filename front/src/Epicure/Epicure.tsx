import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route,Redirect,Switch } from "react-router-dom";
import './Epicure.scss';
import Chefs from './components/Main/Chefs/Chefs';
import Home from './components/Main/Home/Home';
import Restaurants from './components/Main/Restaurants/Restaurants';
import Dishes from './components/Main/Restaurants/Dishes/Dishes';

function Epicure() {
  return (
    <div className="Epicure">
      <Header/>
      <main>
        <Switch>
          <Route path="/" exact><Redirect to="/home"/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/restaurants" exact><Restaurants/></Route>
          <Route path="/restaurants/:restaurantId"><Dishes/></Route>
          <Route path="/chefs"><Chefs/></Route>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default Epicure
