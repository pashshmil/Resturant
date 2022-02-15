import Restaurant from "../types/Restaurant";
import {restaurantsActions} from "./restaurants-slice"
import {notificationActions} from "./notification-slice"
export const getRestaurantsData=()=>{
    return async (dispatch:any) =>{
        const fetchDats =async()=>{
            const response=await fetch('http://localhost:3005/restaurants');
            if(!response.ok){
                throw new Error('not able to get data!!! '); 
              }
            const data=await response.json();//.then(data => console.log("data ",data))
            return data;
        }
        try{
            const restaurants=await fetchDats();
            dispatch(restaurantsActions.getRestaurants(restaurants));
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to get restaruant',
              }))
        }
    } 
}

export const postRestaurantsData=(restaurant:any)=>{
    return async (dispatch:any) =>{
        dispatch(notificationActions.showNotification({
             status:'pending',
             title:'adding',
             message: 'addin new restaurant',
        }))
        const postData =async()=>{
            const response= await fetch('http://localhost:3005/restaurants',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(restaurant),
              });            
              if(!response.ok){
                throw new Error('not able to get data!!! '); 
              }
        }
        try{
            await postData();
            dispatch(notificationActions.showNotification({
                status:'success',
                title:'success',
                message: 'success to add  new restaurant',
           }))
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to add restaruant',
              }))
        }
    } 
}
          
        
    
