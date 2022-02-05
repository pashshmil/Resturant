import {createSlice} from '@reduxjs/toolkit'

const notificationSlice=createSlice({
    name:'notification',
    initialState: {
        status:'',
        title:'',
        message:''
    },
    reducers:{
        showNotification(state:any,action:any) {
            state.notification= {
                status:action.payload.status,
                title: action.payload.title,
                message: action.payload.message
             }                
        }
    } 
})

export const notificationActions= notificationSlice.actions;
export default notificationSlice.reducer;  
