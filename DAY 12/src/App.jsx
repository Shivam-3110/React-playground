import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { useContext } from 'react'

function App() {
 let data =  useContext(MyStore);
 
  return (
    <div>
      <h1>Hello form app</h1>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App