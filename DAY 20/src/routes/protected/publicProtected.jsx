
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

function publicProtected() {

    let {user} = useSelector((store) => store.auth);
    if (user){
        return <Navigate to ={"/Home"}/>
    }
  return (
    <Outlet/>
  )
}


export default publicProtected