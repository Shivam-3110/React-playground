import React from 'react'
import {useForm} from 'react-hook-form';
import {nanoid} from 'nanoid';
import { useContext } from 'react';
import { Recipecontext } from '../../Context/RecipeContext';
export default function Create() {

  const {data,setdata}  =  useContext(Recipecontext);
   const {register,handleSubmit,reset} =  useForm();
   const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data,recipe]);
    reset();
   }
  return (
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
  )
}
