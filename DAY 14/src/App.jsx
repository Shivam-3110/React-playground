import React from 'react'
import { NavLink, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Details from './pages/Details'

function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>}>
          <Route path="detail" element={<Details/>}></Route>         
         </Route>
          <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
    </div>
  )
}

export default App