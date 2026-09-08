import React from 'react'

function Navbar() {
  return (
    <div className ="p-4 bg-black flex justify-between items-center bg-slate-300 rounded-lg shadow-md">
        <div>
            <img className="w-12 h-12 rounded-full" src="" alt="profile"/>
        </div>
        <div className="flex gap-6 font-semibold text-lg">
            <p> Home</p>
            <p> About</p>
            <p> Contact</p>
        </div>
        <button className="p-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Create user
        </button>
    </div>
  )
}

export default Navbar