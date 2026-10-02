import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div className='flex flex-col gap-5'>
      <Navbar/>
      <AppRoutes/> 
    </div>
  )
}
