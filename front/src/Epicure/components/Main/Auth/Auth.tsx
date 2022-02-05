import React,{useRef,useState, useLayoutEffect, useEffect} from 'react';
import './Auth.scss';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { login } from '../../../store/users.actions';

function Auth() {
const dispatch=useDispatch();
const auth=useSelector((state:any) => state.auth.isAuth);
const history = useHistory()
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [isValidMail,setIsValidMail]=useState(true); 
const [isValidPassword,setIsValidPassword]=useState(true);
const [isTouchedMail,setisTouchedMail]=useState(false); 
const [isTouchedPassword,setisTouchedPassword]=useState(false);  
const [isValidForm,setIsValidForm]=useState(false); 
const submitHandler = (event: any) =>{
    event.preventDefault();
    // checkAuth();
     //get restaurants
    // useEffect(()=>{
        console.log("mail ",email);
        console.log("password ",password);
        dispatch(login({email:email,password:password}));
    // },[dispatch])
    // dispatch(authActions.login());
    // history.push("/home");
}

const emailInputChangeHandler=(event:any)=>{
    setisTouchedMail(true);
    setEmail(event.target.value);
    if(event.target.value.trim ()===''){
        setIsValidMail(false);
        return;
    }
    setIsValidMail(true);
    if(isValidPassword && isTouchedPassword){
        setIsValidForm(true);
    } else{
        setIsValidForm(false);
    }
}

const passwordInputChangeHandler=(event:any)=>{
    setisTouchedPassword(true);
    setPassword(event.target.value);
    if(event.target.value.trim()===''){
        setIsValidPassword(false);
        return;
    }
    setIsValidPassword(true);
    if(isValidMail && isTouchedMail){
        setIsValidForm(true);
    } else{
        setIsValidForm(false);
    }
}

const inputMailClasses= !isValidMail && isTouchedMail ? 'form-control invalid': 'form-control'; 
const inputPasswordClasses= !isValidPassword && isTouchedPassword? 'form-control invalid': 'form-control'; 

return (
    <form onSubmit={submitHandler} className="login-form">
            <div className={inputMailClasses}>
                <label htmlFor='email'>Email  </label><br/>
                <input value={email} className='input' type="text" id="email" onChange={emailInputChangeHandler}/>
            </div>
            {(!isValidMail && isTouchedMail) && <p className='not-valid'>mail is not valid</p>}
            <div className={inputPasswordClasses}>
                <label htmlFor='password'>Password  </label><br/>
                <input value={password} className='input' type="text" id="password" onChange={passwordInputChangeHandler}/>
            </div>
            {!isValidPassword && isTouchedPassword && <p className='not-valid'>password is not valid</p>}
            <div className='form-action'>
                <button disabled={!isValidForm} className='btn'>Submit</button>
            </div>
    </form>
  );
}

export default Auth
