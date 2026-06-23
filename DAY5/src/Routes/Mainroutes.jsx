import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import Service from './components/service.jsx'
import About from './components/About.jsx'
export default function Mainroutes() {
  return (
     <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/product" element={<Product />}/>
          <Route path="/service" element={<Service/>}/>
           <Route path="/about" element={<About />}/>
    </Routes>
  )
}
