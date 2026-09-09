import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/usercard'
import Form from './components/Form'

export default function App() {
  const [toggle,setToggle] = useState(false);
   const[users,setUsers] = useState([])
  return (
    <div className = "p-3 h-screen flex flex-col gap-4">
      <Navbar/>
      {
        toggle?<div>
       <Usercard/>
      </div>: <div className ="flex justify-center items-center h-[70%]">
        <Form setUsers={setUsers}/>
      </div>
      }
    </div>
  )
}
