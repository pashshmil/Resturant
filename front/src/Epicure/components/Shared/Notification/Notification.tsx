import React,{useEffect} from 'react';
import './Notification.scss';

const Notification=(props:any) =>{
let classes='';
if(props.status=='error'){
    classes='error';
}
if(props.status==='success'){
    classes='success';
}

const updateClasse='basic '+classes

return (
    <section className={updateClasse}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
    </section>
  );
}

export default Notification
