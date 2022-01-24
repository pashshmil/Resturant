import React from 'react';
import './SearchInput.scss';

function SearchInput() {
  return (
    <div className="search-input">
        <i data-src="/assets/images/icons/search/search-icon.png"></i>
        <input type="search" placeholder="Search for restaurants, cuisine, chef"/>    
    </div>
  );
}

export default SearchInput
