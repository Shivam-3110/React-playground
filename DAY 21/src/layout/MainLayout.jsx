import React from 'react'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
        navbar
        <div>
            <Outlet/>
        </div>
    </div>

  )
}

export default MainLayout