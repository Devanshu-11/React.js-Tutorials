import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import Body from './Body.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';

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
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },{
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