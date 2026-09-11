import React from 'react'

function Usercard({ user }) {
  return (
    <div className="w-64 p-3 border-2 border-white rounded-lg bg-black text-white">
      
      {/* Image */}
      <div className="flex justify-center">
        <img
          className="h-24 w-24 object-cover rounded-full"
          src={user.image}
          alt="profile"
        />
      </div>

      {/* User Details */}
      <div className="mt-3 text-center">
        <h1 className="font-semibold text-lg">{user.name}</h1>
        <p className="text-sm text-gray-400 truncate">{user.email}</p>
        <p className="text-sm text-gray-400">{user.contact}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-2 mt-3">
        <button className="flex-1 bg-yellow-700 text-white py-1.5 px-2 rounded text-sm">
          Update
        </button>

        <button className="flex-1 bg-red-700 text-white py-1.5 px-2 rounded text-sm">
          Delete
        </button>
      </div>

    </div>
  );
}

export default Usercard 