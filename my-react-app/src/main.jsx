import React,{lazy, Suspense} from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import Body from './Body.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';

// Lazy loading
const Grocery=lazy(()=>import("./Grocery.jsx"));
const About=lazy(()=>import ("./About.jsx"));

const AppRouter=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>} ><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>} ><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRouter}>
      <App />
    </RouterProvider>
  </StrictMode>
)