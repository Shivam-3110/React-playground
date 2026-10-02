import React, { useContext } from 'react'
import { NavLink } from 'react-router';


function Navbar() {

  return (
    <div className='bg-black text-white p-5 flex items-center justify-between '> 
        <div> logo </div>
        <div className="flex gap-10 text-xl rounded">
           <NavLink to={"/"}> Home </NavLink>
           <NavLink to={"/about"}> About </NavLink>
           <NavLink to={"/contact"}> Product </NavLink>
        </div>
        <button> Login </button>
    </div>
  )
}
export default Navbar ;