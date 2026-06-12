import React, { useState } from 'react'

function App() {
  const [username,setUserName] = useState("SHUIVA")
  const changeHandler = () =>{
    setUserName("shivam Tripathi")
  }
  return (
    <div>
    <h1>Username</h1>
    <h2>{username}</h2>
    <button onClick={changeHandler}>Change Name</button>
    <div>App</div>
    </div>
  )
}

export default App