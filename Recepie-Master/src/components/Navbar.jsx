import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className = "flex items-center justify-centre gap-x-10  text-sm mb-10">
      <NavLink className = {(e) =>e.isActive ? 'text-red-500' : 'text-white'} to="/">Home</NavLink>
      <NavLink className = {(e) =>e.isActive ? 'text-red-500' : 'text-white'} to="/recipes">Recipes</NavLink>
      <NavLink className = {(e) =>e.isActive ? 'text-red-500' : 'text-white'} to="/about">About</NavLink>
      <NavLink className = {(e) =>e.isActive ? 'text-red-500' : 'text-white'} to="/create-recipe">Create Recipe</NavLink>
    </div>
  ) 
}
    