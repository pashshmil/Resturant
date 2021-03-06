import {createSlice} from '@reduxjs/toolkit'

const initUserState = {user:{}}

const userSlice=createSlice({
    name:'user',
    initialState: initUserState,
    reducers:{
        setUser(state,action){
            state.user=action.payload;
        },
    }
})

export const userActions= userSlice.actions;
export default userSlice.reducer;