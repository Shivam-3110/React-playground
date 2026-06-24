import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {

  return (
    <div className='flex justify-center gap-10 p-10'>
        <NavLink  className={(e)=> e.isActive?"text-red-400":""} to ="/"> Home </NavLink>
         <NavLink className={(e)=> e.isActive?"text-red-400":""}to ="/product"> Product </NavLink>
          <NavLink className={(e)=> e.isActive?"text-red-400":""}to ="/service"> Service </NavLink>
          <NavLink className={(e)=> e.isActive?"text-red-400":""}to ="/about"> About </NavLink>

        </div>

  )
} 
