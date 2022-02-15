import { authActions } from "./auth-slice";
import {notificationActions} from "./notification-slice"
import { userActions } from "./users-slice";
import { useHistory } from 'react-router-dom';

// export const token=(cradentials:any)=>{
//     return async (dispatch:any) =>{
//         dispatch(notificationActions.showNotification({
//              status:'pending',
//              title:'check',
//              message: 'check user',
//         }))
//         const getData =async()=>{
//             const response= await fetch(`http://localhost:3005/users/token`,{
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(cradentials) ,
//             });
                    
//             if(!response.ok){
//                 throw new Error('not able to get data!!! '); 
//             }
//             const accessToken=response.json().then(data => {
//                 return data.accessToken;
//             }); 
//             return accessToken;
//         }
//         try{
//             const token=await getData();
//             dispatch(getUser(token));
//         } catch(error){
//             dispatch(notificationActions.showNotification({
//                 status:'error',
//                 title:'error',
//                 message: 'failed to find user',
//               }))
//         }
//     } 
// }

export const login=(cradentials:any)=>{
    return async (dispatch:any) =>{
        dispatch(notificationActions.showNotification({
             status:'pending',
             title:'check',
             message: 'check user',
        }))
        const getData =async()=>{
            const response= await fetch(`http://localhost:3005/users/login`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cradentials) ,
            });
                    
            if(!response.ok){
                throw new Error('not able to get data!!! '); 
            }
            const accessToken=response.json().then(data => {
                return data.accessToken;
            }); 
            return accessToken;
        }
        try{
            const token=await getData();
            dispatch(getUser(token));
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to find user',
              }))
        }
    } 
}

export const getUser=(token:any)=>{
    return async (dispatch:any) =>{
        const fetchDats =async()=>{
            const response= await fetch(`http://localhost:3005/users/login`,{
                method: 'GET',
                headers: { 'authorization': 'Bearer '+ token },
            });
            if(!response.ok){
                throw new Error('not able to get data!!! '); 
            }
            const data=await response.json();
            return data;
        }
        try{
            const user=await fetchDats();
            if(user){
                dispatch(authActions.login());
                dispatch(userActions.setUser(user));
                dispatch(notificationActions.showNotification({
                    status:'success',
                    title:'success',
                    message: 'success to login',
                }))
            } else{
                dispatch(notificationActions.showNotification({
                    status:'error',
                    title:'error',
                    message: 'user not valid',
                }))   
            }
            setInterval(()=>{
                dispatch(notificationActions.showNotification({
                status:'',
                title:'',
                message: '',
                }))
            },2000);
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to login',
              }))
        }
    } 
}

export const addUser=(cradentials:any)=>{
    return async (dispatch:any) =>{
        const fetchDats =async()=>{
            const response= await fetch(`http://localhost:3005/users`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cradentials) ,
            });
            if(!response.ok){
                throw new Error('not able to get data!!! '); 
            }
        }
        try{
            await fetchDats();
            dispatch(notificationActions.showNotification({
                status:'success',
                title:'success',
                message: 'success to add  new user',
           }))
           setInterval(()=>{
            dispatch(notificationActions.showNotification({
            status:'',
            title:'',
            message: '',
            }))
        },2000);
        } catch(error){
            dispatch(notificationActions.showNotification({
                status:'error',
                title:'error',
                message: 'failed to add new user',
              }))
        }
    } 
}