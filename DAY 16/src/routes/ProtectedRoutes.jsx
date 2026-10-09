import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'
function ProtectedRoutes() {
    const {loggedinUsers,registeredUsers} = useContext(Auth)
    
    let user = registeredUsers.find((user) => user.email === loggedinUsers?.email && user.password === loggedinUsers?.password)
    
    if(!loggedinUsers || !user){
        return <Navigate to="/"/>
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default ProtectedRoutes 