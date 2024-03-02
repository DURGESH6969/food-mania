import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
"use client";

import { ErrorBoundary } from "react-error-boundary";
import Contact from "./Components/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <div className="app mx-2">
      <Header />
      <Outlet/>
    </div>
   </ErrorBoundary>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement : <Error/>,
    children:[
      {
        path: "/",
        element : <Body/>
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element : <RestaurantMenu/>
      }
    ],
  }
])
root.render(<RouterProvider router = {router}/>);
