import {createSlice} from '@reduxjs/toolkit'

const initRestaurantsState = {restaurants:[],restaurant:{}}

const restaurantsSlice=createSlice({
    name:'resturants',
    initialState: initRestaurantsState,
    reducers:{
        getRestaurants(state,action){
            state.restaurants=action.payload;
        },
        postRestaurant(state,action){
            state.restaurant=action.payload.restaurant
        },
    }
})

export const restaurantsActions= restaurantsSlice.actions;
export default restaurantsSlice.reducer;