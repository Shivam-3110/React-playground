import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Services from '../pages/services'
import Authlayouts from '../layouts/Authlayouts'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layouts/MainLayout'

function AppRoutes() {
    let router = createBrowserRouter([
      { 
        path:"/",
        element:<Authlayouts/>,
      children: [   
      {
            path:"",
            element:<LoginPage/>
        },
        {
            path:"/register",
            element:<RegisterPage/>
        }  
    ]
       },
       {
        path:"/main",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"services",
                element:<Services/>
            }
        ]
       }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoutes