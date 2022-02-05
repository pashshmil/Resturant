import {createSlice} from '@reduxjs/toolkit'

const initChefsState = {chefs:[]}

const chefsSlice=createSlice({
    name:'chefs',
    initialState: initChefsState,
    reducers:{
        getChefs(state,action){
            state.chefs=action.payload;
        }
    } 
})

export const chefsActions= chefsSlice.actions;
export default chefsSlice.reducer;  

