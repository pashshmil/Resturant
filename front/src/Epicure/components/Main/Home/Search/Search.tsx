import React from 'react';
import SearchInput from '../../../Shared/SearchInput/SearchInput';
import './Search.scss';

function Search() {
  return (
    <div className="search">
      <div className="search-box">
        <div className="search-text Text-Style-7">
          Epicure works with the top<br/>
          chef restaurants in Tel Aviv
        </div>
        <SearchInput title={'home'}/>
      </div>
    </div>
  );
}

export default Search
