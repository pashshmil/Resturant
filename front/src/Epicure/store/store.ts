import {configureStore} from '@reduxjs/toolkit'
import restaurantsReducer from './restaurants-slice'
import authReducer from './auth-slice'
import notificationReducer from './notification-slice'
import chefsReducer from './chefs-slice'
import dishesReducer from './dishes-slice'
import userReducer from './users-slice'

const store=configureStore({
    reducer: {auth: authReducer, restaurants: restaurantsReducer, notification: notificationReducer,dishes:dishesReducer,chefs: chefsReducer,user: userReducer},
});

export default store;


