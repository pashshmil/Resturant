import React from "react";
import "./Header.scss";
// import "../../Epicure/styles/fonts.scss";
import { Link } from "react-router-dom";
import SearchInput from "../Shared/SearchInput/SearchInput";
const logo = require("../../../assets/images/icons/logo/logo.png");
const user = require("../../../assets/images/icons/user/user-icon.png");
const bag = require("../../../assets/images/icons/bag/bag-icon.png");

// const 
function Header() {
  return (
    <header className="header">
              <Link className="a-home"  to="/home">
                <img className="img-home" src={logo} alt="logo" />
              </Link>
              <label className="Text-Style-6 label-home">Epicure</label>
              <Link className="a-menu Text-Style-2 " to="/restaurants">
                  Restaurants
              </Link>
              <Link className="a-menu Text-Style-2 a-menu" to="/chefs">
                  Chefs
              </Link>
              <SearchInput title={'header'}/>
              <div>
                <img src={user} className="user-icon"/>
                <img src={bag} className="bag-icon"/>
              </div>
    </header>
  );
}

export default Header;
