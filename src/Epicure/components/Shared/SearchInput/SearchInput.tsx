import React from 'react';
import './SearchInput.scss';
// import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
const search = require("../../../../assets/images/icons/search/search-icon.png");

const SearchInput:React.FC<{title:string}>=(props)=> {
  console.log("title ",props.title);
  
  return (
    <section className='header-box'>
      <input className='header-input' type="text"/>
    </section>
  );
}

export default SearchInput
