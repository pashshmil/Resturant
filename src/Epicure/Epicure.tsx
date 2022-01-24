import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './Epicure.scss';

function Epicure() {
  return (
    <div className="Epicure">
     <Header/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default Epicure
