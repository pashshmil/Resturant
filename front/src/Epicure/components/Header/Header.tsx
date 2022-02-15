import React from "react";
import "./Header.scss";
// import "../../Epicure/styles/fonts.scss";
import { NavLink } from "react-router-dom";
import SearchInput from "../Shared/SearchInput/SearchInput";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
const logo = require("../../../assets/images/icons/logo/logo.png");
const user = require("../../../assets/images/icons/user/user-icon.png");
const bag = require("../../../assets/images/icons/bag/bag-icon.png");

// const 
function Header() {
  const auth=useSelector((state:any) => state.auth.isAuth);
  const dispatch=useDispatch();
  const logoutHandler=()=>{
    dispatch(authActions.logout());
  }
  
  return (
    <header className="header">
              <NavLink className="a-home"  to="/home">
                <img className="img-home" src={logo} alt="logo" />
              </NavLink>
              <label className="Text-Style-6 label-home">Epicure</label>
              {auth &&
              <nav className="nav">
                <NavLink className="a-menu Text-Style-2 " to="/restaurants">
                    Restaurants
                </NavLink>
                <NavLink className="a-menu Text-Style-2" to="/chefs">
                    Chefs
                </NavLink>
                <SearchInput title={'header'}/>
                <span className="nav-icons">
                  <img src={user} className="user-icon"/>
                  <img src={bag} className="bag-icon"/>
                </span>
                <button className="btn" onClick={logoutHandler}>Logout</button>
              </nav>}
    </header>
  );
}

export default Header;
