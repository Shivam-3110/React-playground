import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import { Route, Routes } from 'react-router'

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes