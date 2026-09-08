import React from 'react'

function Usercard() {
  return (
    <div className = " flex flex-col gap-2 h-30 p-4 border-white border-2 rounded bg-black ">
        <div className = "h-60 w-60">
            <img className="object-fit h-full rounded-xl " src="" alt="profile"/>
        </div>
        <div className="flex flex-col gap-1">
            <h1> Name </h1>
            <p className="text-small"> email </p>
            <p className="text-small"> contact </p>
        </div>
        <div className="flex w-full justify-between gap-4"> 
        <button className ="bg-yellow-700 text-white py-2 px-3"> Update </button>
        <button  className='bg-red-700 text-white py-2 px-3'> Delete </button>
        </div> 
    </div>
  )
}

export default Usercard