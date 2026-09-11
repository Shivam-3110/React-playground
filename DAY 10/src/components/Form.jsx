import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
function Form ({setUsers , setToggle,users}) {

  let {register,handleSubmit,reset,formState:{errors}} = useForm({ mode:"onChange"});
  
  let formSubmit = (data) => {
    console.log(data);
    setUsers((prev) => [...prev,data])
    localStorage.setItem("users",JSON.stringify(users))
    reset();
    setToggle((prev) => !prev)
  }
  return (
    <div className ="flex flex-col gap-6">
        <h1 className="text-xl font-semibold"> Create User </h1>
        <form  onSubmit={handleSubmit(formSubmit)} className ="w-60 flex flex-col bg-black gap-3 p-4 rounded border-white">
             
              <input {...register("name",{required:"Name is mandatory"})} className ='p-2 rounded text-white outline-0 border border-white' type="text"
             placeholder="enter the name" name="name"/>
               {errors.name && (
          <p className="text-red-500">
            {errors.name.message}
          </p>
        )}
             <input {...register("email",{required:"email is mandatory"})} className="p-2 rounded text-white outline-0 border border-white" type="email"
             placeholder="enter the email" name="email"/>
              {errors.email && ( <p className='text-red-500'>  {errors.email.message} </p>)}
              <input {...register("mobile",{required:"mobile is mandatory"})} className="p-2 rounded text-white outline-0 border border-white" type="Number"
             placeholder="enter the mobile No" name="mobile"/>
             {errors.mobile &&( <p className='text-red-500'>  {errors.mobile.message} </p>)}
              <input {...register("image",{required:"image is mandatory"})} className="p-2 rounded text-white outline-0 border border-white" type="url"
             placeholder="enter the image url" name="image"/>
             {errors.image && (<p className='text-red-500'>  {errors.image.message} </p>)}
             <button className='text-white bg-blue-700 p-4 rounded cursor-pointer'> Add user </button>
        </form>
    </div>  
  )
}
export default Form;