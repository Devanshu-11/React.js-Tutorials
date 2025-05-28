import { Link } from "react-router-dom";
import {LOGO_URL} from "./utils/constants";
import {useEffect, useState} from "react";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header=()=>{
  // Never use useState hook inside the if else statement, loops or functions
  const [btnNameReact, setBtnNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus();

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
    <div className="header flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_URL} />
      </div>
    
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">
            Online Status: {onlineStatus? "Online": "Offline"}
          </li>

          <li className="px-4 text-lg">
            <Link to='/'>Home</Link>
          </li>

          <li className="px-4 text-lg">
            <Link to='/about'>About Us</Link>
          </li>

          <li className="px-4 text-lg">
            <Link to='/contact'>Contact Us</Link>
          </li>

          <li className="px-4 text-lg">
            <Link to='/grocery'>Grocery</Link>
          </li>

          <li className="px-4 text-lg">Cart</li>
          <button className="login px-2 text-lg" onClick={btnName}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;