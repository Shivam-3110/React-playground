import React from 'react'
import { Routes } from 'react-router-dom'
import Home from '../pages/Home'


export default function Mainroutes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />

    </Routes>
  )
}
