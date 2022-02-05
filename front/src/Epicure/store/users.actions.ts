import {notificationActions} from "./notification-slice"
import { userActions } from "./users-slice";
export const login=(cradentials:any)=>{
    return async (dispatch:any) =>{
        dispatch(notificationActions.showNotification({
             status:'pending',
             title:'check',
             message: 'check user',
        }))
        const getData =async()=>{
            const response= await fetch(`http://localhost:4000/login`,{
                method: 'POST',
                body: JSON.stringify(cradentials) ,
            });            
            if(!response.ok){
                throw new Error('not able to get data!!! '); 
            }
        }
        try{
            const user=await getData();
            dispatch(userActions.getUser(user));
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to find user',
              }))
        }
    } 
}