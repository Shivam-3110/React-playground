import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router"
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import MainLayout from '../layout/MainLayout';
import HomePage from '../Pages/HomePage';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/AuthSlice';

function AppRoutes() {
    let dispatch = useDispatch()
  
    const hydrateUser = () => {
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

        if(!loggedInUser){
            toast.error("unAuthorized user");
            return;
        }
        dispatch(addUser(loggedInUser));
    }

useEffect(() => {
    hydrateUser();
},[]);



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