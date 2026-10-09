import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className='h-screen p-2 flex grid grid-cols-[1fr_7fr] gap-2'>
      <Navbar/>
      <div className= "h-full p-2">
      <Outlet/>
      </div>
       
    </div>
  )
}

export default MainLayout ;
