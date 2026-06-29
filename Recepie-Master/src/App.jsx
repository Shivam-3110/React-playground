import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div className="text-white font-thin bg-gray-700 h-screen w-screen py-10 px-[20%]">
      <Navbar/>
      
      <Mainroutes/>
    </div>
  )
}
