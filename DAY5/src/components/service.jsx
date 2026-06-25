import React from 'react'
import { useNavigate } from 'react-router-dom'
import ServiceDetails from './ServiceDetails.jsx';
import { Outlet } from 'react-router-dom';
export default function service() {
  const navigate =  useNavigate();
  return (
    <div>
  <h1 className='text-5xl font-thin mb-3'> Services </h1>
      <button onClick = {()=> navigate("/service/details")}className="bg-white text-black px-4 py-2 rounded">Service Details</button>
     <hr className='my-5'/>
     <Outlet/>
    </div>
  )
}
