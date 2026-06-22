import React from 'react'
import {Route, Routes} from "react-router-dom";
export default function App() {
  return (
    <div className = "w-screen h-screen bg-gray-800 text-white ">
  <Nav/>
    <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/product" element={<Product />}/>
          <Route path="/service" element={<Service/>}/>
           <Route path="/about" element={<About />}/>
    </Routes>
        
        
        </div>
  )
}
