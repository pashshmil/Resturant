import React,{useState} from 'react';
import './SearchInput.scss';
// import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
const search = require("../../../../assets/images/icons/search/search-icon.png");

const SearchInput:React.FC<{title:string}>=(props)=> {
  // console.log("title ",props.title);
  // const [title1,setTitle]=useState();
  // setTitle(props.title);
  return (
    <section>
      {props.title==='header' && <input className="header-input" placeholder='chefs,restuarants' type="text"/>}
      {props.title==='home' && <input className="home-input" placeholder='chefs,restuarants' type="text"/>}
    </section>
  );
}

export default SearchInput


