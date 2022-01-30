import {createSlice,configureStore} from '@reduxjs/toolkit'

const initRestaurants={}

const restaurantsSlice=createSlice({
    name: 'restaurants',
    initialState: initRestaurants,
    reducers: {
        
    }
});

const store=configureStore({
    reducer: restaurantsSlice.reducer
});

export const restaurantsActions= restaurantsSlice.actions
export default store;


