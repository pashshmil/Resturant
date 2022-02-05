import {createSlice} from '@reduxjs/toolkit'

const initDishesState = {dishes:[]}

const dishesSlice=createSlice({
    name:'dishes',
    initialState: initDishesState,
    reducers:{
        getDishes(state,action){
            state.dishes=action.payload;
        }
    } 
})

export const dishesActions= dishesSlice.actions;
export default dishesSlice.reducer;  

