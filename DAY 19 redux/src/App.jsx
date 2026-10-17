import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './app/Store'
import { decrement, increment } from './features/counterSlice';

function App() {
  let dispatch = useDispatch();
  let {count} = useSelector((store) => store.counter)
  console.log(count)
  return (
    <div> 
      Reduxjs-toolkit
      <h1> My Count is {count}</h1>
      <button onClick = {() => dispatch(decrement())}> Decr</button>
      <button onClick = {() => dispatch(increment())}> Incr </button>
    </div>
  )
}

export default App