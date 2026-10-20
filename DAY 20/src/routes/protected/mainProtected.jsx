

import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

function mainProtected() {

    let {user} = useSelector((store) => store.auth);
    if (!user){
        return <Navigate to ={"/"}/>
    }
  return (
    <Outlet/>
  )
}

export default mainProtected