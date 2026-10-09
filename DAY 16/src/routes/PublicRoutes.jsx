import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router';

function PublicRoutes() {
    const {loggedinUsers} = useContext(Auth)
  if(loggedinUsers){
    return <Navigate to="/main"/>
  }
    return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PublicRoutes;