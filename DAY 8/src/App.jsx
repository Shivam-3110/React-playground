import React from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { useState } from 'react'
export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {toggle ? <Login  setToggle={setToggle}/> : <Register setToggle={setToggle} />}
    </div>
  )
}
