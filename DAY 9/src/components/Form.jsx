import React, { useRef } from 'react'

export default function Form() {
    const formRef = useRef({});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formRef.current.product.value);
        console.log(formRef.current.price.value);
        console.log(formRef.current.category.value);
        console.log(formRef.current.image.value);
    }
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-80 h-50">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input ref = {(e) => formRef.current.product = e} type="text" placeholder="Enter your product" name ="product" />
          <input ref = {(e)=> formRef.current.price=e}type="text" placeholder="Enter your price" name ="price" />
          <span> Select Category</span>
           <select ref={(e)=> formRef.current.category=e}>
              <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
           </select>
           <input ref = {(e)=> formRef.current.price=e} type="url" placeholder="Enter your image url" name ="image" />
           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Create</button>
        </form>
    </div>
  )
}
