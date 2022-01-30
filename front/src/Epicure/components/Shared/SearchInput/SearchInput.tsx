import React,{useState} from 'react';
import './SearchInput.scss';

const SearchInput:React.FC<{title:string}>=(props)=> {
  return (
    <section>
      {props.title==='header' && <input className="header-input" placeholder='chefs,restuarants' type="text"/>}
      {props.title==='home' && <input className="home-input" placeholder='chefs,restuarants' type="text"/>}
    </section>
  );
}

export default SearchInput


