import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Recipes from '../Pages/Recipes'
import Create from '../Pages/Create'
import SingleRecipe from '../Pages/SingleRecipe'
export default function Mainroutes() {

  return (
    <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/recipes" element={<Recipes/>}
        >
      
        </Route>
          <Route path ="/create-recipe" element={<Create/>}/>
          <Route path="/recipes/details/:id" element={<SingleRecipe/>}> </Route>
    </Routes>
  )
}
