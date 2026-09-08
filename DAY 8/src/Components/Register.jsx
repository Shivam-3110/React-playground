import React from 'react'
import { useState } from 'react'
export default function Register({setToggle}) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [userData,setUserData] = useState([]);
  console.log(userData)
  const handleChange = (e) => {
    let {name,value} = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData,formData]);
    setFormData({
      email: "",
      password: ""
    })
  }
  return (
    <div>
        <div className="bg-white w-90">
        <h2> Register Form </h2>
        <form onSubmit ={handleSubmit}className ="flex flex-col gap-4 p-4">
            <input value={formData.email} required onChange={handleChange} name="email"className="p-2 border border-gray-400 rounded" type="text" placeholder='email' />
            <input value= {formData.password} required onChange={handleChange} name="password" className="p-2 border border-gray-400 rounded" type="password" placeholder='Password' />
            <button className="bg-red-600 rounded">Register</button>
            <p>Already have an account? <span onClick={() => setToggle((prev) => !prev) }className="text-blue-400 cursor-pointer">Login</span></p>
        </form>
    </div>
    </div>
  )
}
