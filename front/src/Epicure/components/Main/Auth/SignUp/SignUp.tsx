import React,{useRef,useState, useLayoutEffect, useEffect} from 'react';
import './SignUp.scss';
import {useDispatch, useSelector} from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom';
import { Route,Redirect,Switch } from "react-router-dom";
import { addUser, login } from '../../../../store/users.actions';

function SignUp() {
const dispatch=useDispatch();
const auth=useSelector((state:any) => state.auth.isAuth);
const user=useSelector((state:any) => state.user.user);
const history = useHistory()
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
// const [isValidMail,setIsValidMail]=useState(true); 
// const [isValidPassword,setIsValidPassword]=useState(true);
// const [isTouchedMail,setisTouchedMail]=useState(false); 
// const [isTouchedPassword,setisTouchedPassword]=useState(false);  
// const [isValidForm,setIsValidForm]=useState(false); 
const submitHandler = (event: any) =>{
    event.preventDefault();
    dispatch(addUser({email:email,password:password}));
}

// useEffect(()=>{    
//     if(auth){
//         history.push('/home');
//     }
// },[auth]);

const emailInputChangeHandler=(event:any)=>{
    setEmail(event.target.value);
}

const passwordInputChangeHandler=(event:any)=>{
    setPassword(event.target.value);
}

// const inputMailClasses= !isValidMail && isTouchedMail ? 'form-control invalid': 'form-control'; 
// const inputPasswordClasses= !isValidPassword && isTouchedPassword? 'form-control invalid': 'form-control'; 

return (
    <section>
    <form onSubmit={submitHandler} className="login-form">
            <div>
                <label htmlFor='email'>Email  </label><br/>
                <input value={email} className='input' type="text" id="email" onChange={emailInputChangeHandler}/>
            </div><br/>
            <div>
                <label htmlFor='password'>Password  </label><br/>
                <input value={password} className='input' type="text" id="password" onChange={passwordInputChangeHandler}/>
            </div>
            <div className='form-action'>
                <button disabled={!email || !password} className='btn'>Sign Up</button><br/>
                <NavLink className="a-home"  to="/login">
                    <span>Login</span>
                </NavLink>
            </div>
    </form>
    </section>
);
}

export default SignUp
