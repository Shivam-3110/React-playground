import React from 'react'
import { NavLink, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
       <nav className="flex items-center justify-between mb-4">
         <div className="flex items-center justify-between gap-6">
            <NavLink to={"/"}>Home</NavLink>
               <NavLink to={"/about"}>About</NavLink>
                  <NavLink to={"/contact"}>Contact</NavLink>
         </div>
       </nav>
       <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
    </div>
  )
}

export default App