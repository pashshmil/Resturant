import React from 'react';
import ReactDOM from 'react-dom';
import Epicure from './Epicure/Epicure';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import {Provider} from 'react-redux'
import store from './Epicure/store/store' 
ReactDOM.render(<Provider store={store}><BrowserRouter><Epicure /></BrowserRouter></Provider>, document.getElementById('root'));




