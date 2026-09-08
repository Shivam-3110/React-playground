import React from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/usercard'
import Form from './components/Form'

export default function App() {
  const [toggle,setToggle] = useState(false);
  return (
    <div className = "p-3 h-screen ">
      <Navbar/>
      {
        toggle?<div>
       <Usercard/>
      </div>: <div>
        <Form/>
      </div>
      }
    </div>
  )
}
