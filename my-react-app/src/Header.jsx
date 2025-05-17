import { Link } from "react-router-dom";
import {LOGO_URL} from "./utils/constants";
import {useEffect, useState} from "react";

const Header=()=>{
  // Never use useState hook inside the if else statement, loops or functions
  const [btnNameReact, setBtnNameReact]=useState("Login");

  function btnName(){
    if(btnNameReact==='Login'){
      setBtnNameReact('Logout');
    }else{
      setBtnNameReact('Login');
    }
  }

  // if there is no dependency array, useEffect will be called on every component rendered
  // if dependency array is empty, useEffect will be called on initial render and only once
  // if i write a dependency array which is btnNameReact, then useEffect will be called everytime when btnNameReact is updated
  useEffect(()=>{
    console.log("useEffect called");
  });

  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
    
      <div className="nav-items">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={btnName}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;