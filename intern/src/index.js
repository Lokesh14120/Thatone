import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App.js";
import Navigation from "./Components/Shared/Navigation/Navigation.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Home/Login/Login.jsx";
import Texteditor from "./Pages/Texteditor/Texteditor.jsx";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: 
    // <Navigation/>
    <Home/>,
  },
  {
    path:"home",
    element:<Home/>

  },
  {
    path:"login",
    element:<Login/>


  },
  {
    path:"text",
    element:<Texteditor/>

  },
]);

createRoot(document.getElementById("root")).render(
  <>
  {/* <Navigation/> */}
  
  <RouterProvider router={router} />
  </>
);