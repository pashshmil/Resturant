import { chefsActions } from "./chefs-slice";
import {notificationActions} from "./notification-slice"
export const getChefsData=()=>{
    return async (dispatch:any) =>{
        const fetchDats =async()=>{
            const response=await fetch('http://localhost:3005/chefs');
            if(!response.ok){
                throw new Error('not able to get data!!! '); 
              }
            const data=await response.json();
            return data;
        }
        try{
            const chefs=await fetchDats();
            dispatch(chefsActions.getChefs(chefs));
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to get restaruant',
              }))
        }
    } 
}
          
        
    
