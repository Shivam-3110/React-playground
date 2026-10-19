import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router"
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import MainLayout from '../layout/MainLayout';
import HomePage from '../Pages/HomePage';

function AppRoutes() {
   let router = createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {
                path:"",
                element:<LoginPage/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
    },
    {
        path:"/main",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<HomePage/>
            }

        ]
    }
   ])
  return <RouterProvider  router={router}/>;
    
   
}

export default AppRoutes;