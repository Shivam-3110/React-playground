import React, { useContext } from 'react'
import { myStore } from '../context/MyContext';

function Navbar() {
  let {setIsCartOpen} = useContext(myStore);
  return (
    <div className='bg-black text-white p-5 flex items-center justify-between '> 
        <div> logo </div>
        <div className="flex gap-10 text-xl rounded">
            <p onClick={() => setIsCartOpen(false)}className='cursor-pointer'> Home </p>
            <p onClick={() => setIsCartOpen(true)}className='cursor-pointer'> Cart </p>
        </div>
        <button> Login </button>
    </div>
  )
}
export default Navbar ;