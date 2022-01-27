import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route,Redirect } from "react-router-dom";
import './Epicure.scss';
import Restaurants from './components/Main/Restaurants/Restaurants';
import Chefs from './components/Main/Chefs/Chefs';
import Home from './components/Main/Home/Home';

function Epicure() {
  return (
    <div className="Epicure">
      <Header/>
      <main>
        <Route path="/"><Redirect to="/home"/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/restaurants"><Restaurants/></Route>
        <Route path="/chefs"><Chefs/></Route>
      </main>
      <Footer/>
    </div>
  );
}

export default Epicure
