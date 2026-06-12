import React, { Fragment } from 'react'

function App() {

const handleclick = ()=>{
  alert("Button Clicked")
}
const handleParamclick = (msg)=>{
  alert(msg)
}
const wrapper = ()=>{
handleParamclick("raat me 12 bjee")
}
  return (
    <Fragment>
      <h3>{5+7}</h3>
<div>App</div>
<div>shivam</div>
    
    <button onClick={handleclick}> click</button>
    <button onClick={wrapper} >click for parameter</button>
    </Fragment>
  )
}

export default App