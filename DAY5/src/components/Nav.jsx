import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

  return (
    <div className='flex justify-center gap-10 p-10'>
        <NavLink  className={(e)=> e.isActive?"text-red-400":""} to ="/"> Home </NavLink>
         <NavLink to ="/product"> Product </NavLink>
          <NavLink to ="/service"> Service </NavLink>
          <NavLink to ="/about"> About </NavLink>

        </div>

  )
} 
