import React, { useState } from 'react'

export const Form = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <input onChange={(e)=>{setName(e.target.value)}}type="text" placeholder='Enter your name' className='border-2 border-gray-300 rounded-md p-2 m-2' />
        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter your email' className='border-2 border-gray-300 rounded-md p-2 m-2' />
        <input onChange={(e)=>{setPassword(e.target.value)}}type="password" placeholder='Enter your password' className='border-2 border-gray-300 rounded-md p-2 m-2' />
        <button className='bg-blue-500 text-white rounded-md p-2 m-2'>Submit</button>
    </div>
  )
}
