import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ServiceDetails() {
    const navigate = useNavigate();
   
  return (
    <div>

     <h1 className='text-4xl font-thin mb-3'>Service Name</h1>
     <h2 className='text-2xl font-thin mb-5'> Service Details </h2>
      <button onClick = {()=> navigate(-1)}className="bg-white text-black px-4 py-2 rounded">Go Back</button>

    </div>
  )
}
