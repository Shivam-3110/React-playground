import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Services from '../pages/services'
import Authlayouts from '../layouts/Authlayouts'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layouts/MainLayout'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes'

import { lazy } from 'react'
let UsersPage = lazy(() => import('../pages/UsersPage'))
let ProductPage = lazy(() => import('../pages/ProductPage'))
function AppRoutes() {
    let router = createBrowserRouter([
      { 
        path:"/",
        element:<PublicRoutes/>,
        children:[
            {
                path:"",
                element:<Authlayouts/>,
                children:[
                    {
                        path:"",
                        element:<LoginPage/>
                    },
                    {
                        path:"register",
                        element:<RegisterPage/>
                    }
                ]
            }
        ]
       },
        {
            path: "/main",
            element: <ProtectedRoutes />,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        {
                            index: true,
                            element: <Home />
                        },
                        {
                            path: "about",
                            element: <About />
                        },
                        {
                            path: "services",
                            element: <Services />
                        },
                        {
                            path: "users",
                            element: <UsersPage />
                        },
                        {
                            path: "products",
                            element: <ProductPage />
                        }
                    ]
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