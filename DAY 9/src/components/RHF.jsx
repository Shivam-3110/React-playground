import React from 'react'
import { useForm } from 'react-hook-form';

export default function RHF() {
  const { register, handleSubmit,reset,formState:{errors} } = useForm();
    const FormSubmit = (data) => {
        console.log(data);
        reset();
    }
  return (
   <div className="bg-white p-4 rounded-lg shadow-md w-80 h-50">
        <h1> This is React hook form </h1>
        <form onSubmit={handleSubmit(FormSubmit)} className="flex flex-col gap-2">
          <input {...register("product")} type="text" placeholder="Enter your product" name ="product" />
          <input {...register("price")} type="text" placeholder="Enter your price" name ="price" />
          <span> Select Category</span>
           <select {...register("category")}>
              <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
           </select>
           <input {...register("image")} type="url" placeholder="Enter your image url" name ="image" />
           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Create</button>
        </form>
    </div>
  )
}
