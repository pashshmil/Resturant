import { dishesActions } from "./dishes-slice";
import {notificationActions} from "./notification-slice"
export const getDishesData=()=>{
    return async (dispatch:any) =>{
        const fetchDats =async()=>{
            const response=await fetch('http://localhost:3005/dishes');
            if(!response.ok){
                throw new Error('not able to get data!!! '); 
              }
            const data=await response.json();
            return data;
        }
        try{
            const dishes=await fetchDats();
            dispatch(dishesActions.getDishes(dishes));
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to get restaruant',
              }))
        }
    } 
}
          
        
    
