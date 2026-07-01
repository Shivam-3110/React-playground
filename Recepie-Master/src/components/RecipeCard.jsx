import React from 'react'
import {Link} from "react-router-dom";
export default function RecipeCard(props) {
  const { recipe } = props;
  const {id, title, image, ingredients, instructions} = props.recipe;
  return (
    <div>
        <Link to= {`/recipes/details/${id}`} className='mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow'> 
        <img className='object-cover w-full h-[20vh]'   src ={image} alt=""/>
        <h1 className="px-2 pt-3 mt-2 font-black">{title}</h1>
        <p className="px-2 pb-3"> {instructions.slice(0, 100)}...{" "} <small className='text-blue-400'>more</small></p>
        </Link>
        </div>
  )
}