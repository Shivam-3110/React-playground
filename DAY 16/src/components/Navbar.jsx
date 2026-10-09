import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className="border-r border-gray-500 p-2">
        <h1>Logo</h1>

        <div>
            <NavLink to={"/main"}> Home </NavLink>
             <NavLink to="/main/users">Users</NavLink>
              <NavLink to={"/main/products"}> Products </NavLink>
        </div>

        </div>
  )
}

export default Navbar