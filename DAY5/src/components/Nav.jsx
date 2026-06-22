import React from 'react'

export default function Nav() {
  return (
    <div className='flex justify-center gap-10 padding-10'>
        <Link to ="/"> Home </Link>
         <Link to ="/product"> Product </Link>
          <Link to ="/service"> Service </Link>
          <Link to ="/about"> About </Link>
        </div>
  )
}
