import React from 'react'
import { useContext } from 'react'
import { Recipecontext } from '../../Context/RecipeContext';
import RecipeCard from '../components/RecipeCard';
export default function Recipes() {
  const{data} = useContext(Recipecontext);

  const renderrecipes = data.map((recipe) =>
    <RecipeCard key={recipe.id} recipe={recipe} />
  )
  return (
    <div className='flex flex-wrap'>{data.length > 0 ? renderrecipes:"No recipes found"}</div>
  )
    }
