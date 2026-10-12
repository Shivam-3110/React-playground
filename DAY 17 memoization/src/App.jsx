import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'

function App() {
  console.log("app rendering ")
  const [count, setCount] = useState(0)
  return (
    <div>
    <h1> memoization</h1>
    <h2>count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    <hr />
    <Home />
    <About />

    </div>
  )
}

export default App