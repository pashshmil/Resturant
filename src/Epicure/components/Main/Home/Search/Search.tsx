import React from 'react';
import SearchInput from '../../../Shared/SearchInput/SearchInput';
import './Search.scss';

function Search() {
  return (
    <div className="search">
      <div className="search-box">
        <p className="search-text">
          Epicure works with the app<br/>
          chef restaurants in Tel Aviv
        </p>
        <SearchInput/>
      </div>
    </div>
  );
}

export default Search
