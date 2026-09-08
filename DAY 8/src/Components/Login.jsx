import React from 'react'

export default function Login({setToggle}) {
  return (
    <div className="bg-white w-90">
        <h2> Login Form </h2>
        <form className ="flex flex-col gap-4 p-4">
            <input className="p-2 border border-gray-400 rounded" type="text" placeholder='email' />
            <input className="p-2 border border-gray-400 rounded" type="password" placeholder='Password' />
            <button className="bg-red-600 rounded">Login</button>
            <p>Don't have an account? <span onClick={() => setToggle((prev) => !prev)} className="text-blue-400 cursor-pointer">Register</span></p>
        </form>
    </div>
  )
}
