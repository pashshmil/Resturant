import React,{Fragment, useEffect} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route,Redirect,Switch } from "react-router-dom";
import './Epicure.scss';
import Chefs from './components/Main/Chefs/Chefs';
import Home from './components/Main/Home/Home';
import Restaurants from './components/Main/Restaurants/Restaurants';
import Dishes from './components/Main/Restaurants/Dishes/Dishes';
import {useSelector,useDispatch} from 'react-redux';
import Notification from './components/Shared/Notification/Notification';
import Auth from './components/Main/Auth/Auth';
import { getChefsData } from './store/chefs.actions';
import { getDishesData } from './store/dishes.actions';
import { getRestaurantsData } from './store/restuarants.actions';
import SignUp from './components/Main/Auth/SignUp/SignUp';

let isInitial=true;
function Epicure() {
  const auth=useSelector((state:any) => state.auth.isAuth);
  const notification=useSelector((state:any)=> state.notification.notification );
  const dispatch=useDispatch();
  // console.log("not ",notification);
  //get restaurants
  useEffect(()=>{
    dispatch(getRestaurantsData());
  },[dispatch])

  //get chefs
  useEffect(()=>{
    dispatch(getChefsData());
  },[dispatch])

  //get dishes
  useEffect(()=>{
    dispatch(getDishesData());
  },[dispatch])
  
  return (
    <div className="Epicure">
      <Header/>
      <main>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
        <Switch>
          <Route path="/" exact><Redirect to="/login"/></Route>
          <Route path="/login"><Auth/></Route>
          <Route path="/sign-up"><SignUp/></Route>
          {auth &&<Fragment><Route path="/home"><Home/></Route>
          <Route path="/restaurants" exact><Restaurants/></Route>
          {/* <Route path="/add-restaurant"><AddRestaurant/></Route> */}
          <Route path="/restaurants/:restaurantId"><Dishes/></Route>
          <Route path="/chefs"><Chefs/></Route></Fragment>}
          <Route path="/*" exact><Redirect to="/login"/></Route>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default Epicure
