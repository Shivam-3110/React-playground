import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router"
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import MainLayout from '../layout/MainLayout';
import HomePage from '../Pages/HomePage';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/AuthSlice';
import PublicProtected from './protected/publicProtected';
import MainProtected from './protected/mainProtected';
import { toast } from 'react-toastify';
import ShopPage from '../Pages/ShopPage';

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
        element:<PublicProtected/>,
        children:[
            {
            path:"",
            element:<AuthLayout/>,
            children:[
                {
                    path:"",
                    element:<LoginPage/>
                },
                {
                    path:"/register",
                    element:<Register/>
                }
            ]
        }
        ]
    },
    {
        path:"/main",
        element:<MainProtected/>,
        children:[
            {
                path:"",
                 element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<HomePage/>
            },
             {
                path:"shop",
                element:<ShopPage/>
            }

        ]
            }
        ]
    }
   ])
  return <RouterProvider  router={router}/>;
    
   
}

export default AppRoutes;