import { useState } from "react";
import "./App.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout,Aboutus,Contactus,Home} from "./components/index"


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
          path:'/aboutus',
          element:<Aboutus/>
      },
      {
          path:'/contactus',
          element:<Contactus/>
      },
    ]
  }
])

function App() {

  return (

    <>
      <RouterProvider router={router}/>
      
    </>

  );
}

export default App;
