import React from 'react';
import {useState, useEffect} from 'react';

const User=(props)=>{
    const [count, setCount]=useState(0);
    const [count2, setCount2]= useState(1);

    useEffect(()=>{
      console.log("use Effect function is called");
    });

  return(
    <div className='user-card'>
        <h1>Count= {count}</h1>
        <h1>Count2= {count2}</h1>

        <h2>Name: {props.name}</h2>
        <h3>Location: India</h3>
        <h4>Contact: @akshaymarch7</h4>
    </div>
  )
}

export default User;