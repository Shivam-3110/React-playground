import React from 'react'

function Home() {
  console.log("Home rendering....")
  return (
    <div>Home</div>
  )
}                   

export default React.memo(Home)             