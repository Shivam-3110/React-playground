import React, { useContext } from 'react'


function Navbar() {

  return (
    <div className='bg-black text-white p-5 flex items-center justify-between '> 
        <div> logo </div>
        <div className="flex gap-10 text-xl rounded">
            <p className='cursor-pointer'> Home </p>
            <p className='cursor-pointer'> About </p>
             <p className='cursor-pointer'> contact </p>
        </div>
        <button> Login </button>
    </div>
  )
}
export default Navbar ;