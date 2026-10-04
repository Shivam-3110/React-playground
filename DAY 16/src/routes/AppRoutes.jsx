import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Services from '../pages/services'

function AppRoutes() {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/services",
            element:<Services/>
        }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoutes