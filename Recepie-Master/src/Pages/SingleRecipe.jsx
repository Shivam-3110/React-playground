import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import RecipeContext  from '../../Context/RecipeContext';
export default function SingleRecipe() {
  const {data} = useContext(RecipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  return 
    recipe ? <div className = "w-full flex">
       <div className = "left w-1/2 p-2"> 
             <h1 className='text-5xl font-black'>{recipe.title}</h1>
             <img className="h-[20vh]" src={recipe.image} alt={recipe.title} className='w-full h-[20vh] object-cover' />
       </div>


       <div className = "right w-1/2 p-2"> </div>
         <form onSubmit={handleSubmit((SubmitHandler))}>

        <input {...register("title")} type="text" placeholder='Recipe Title' className='w-full p-4 text-lg rounded-lg bg-gray-700 mb-4' />

<small className="text-red-500">error looking fromat</small>
        <input {...register("image")} type="url" placeholder='enter img url' className='w-full p-4 text-lg rounded-lg bg-gray-700 mb-4' />
        <select {...register("category")} className='w-full p-4 text-lg rounded-lg bg-gray-700 mb-4'>
            <option value="">Select Category</option>
            <option value="cat-1">Breakfast</option>
            <option value="cat-2">Lunch</option>
            <option value="cat-3">Dinner</option>
        </select>

        <textarea  {...register("instructions")} placeholder='Recipe Instructions' className='w-full p-4 text-lg rounded-lg bg-gray-700 mb-4' />
        <input   {...register("ingredients")} type="text" placeholder='Recipe Ingredients' className='w-full p-4 text-lg rounded-lg bg-gray-700 mb-4' />
        <button className='bg-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors'>Save Recipe</button>

    </form>

    </div>:"Loading...";
  
}
