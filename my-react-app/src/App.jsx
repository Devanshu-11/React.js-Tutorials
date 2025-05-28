import React,{lazy, Suspense} from 'react';
import './App.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import {Outlet} from 'react-router-dom';

const App=()=>{
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App;