import React from 'react'
import { useProductApi } from '../hooks/productsHooks'

function Filters() {
 
    let {filterProducts} = useProductApi();
    
  return (
    <div className="p-3 flex gap-6  border border-gray-500">
        <div className='flex gap-8'>
        <input 

        onChange={(e) => filterProducts(e.target.value)}
        className="p-2 w-full outline-0 border rouneded" 
        type="text" 
        placeholder="search products..."/>

        <button className="p-2 bg-white/50 text-blue-400 rounded border-0"> search </button>
    </div>
     <div className=''>
     <select className="p-2 bg-white text-black rounded border-0">
        <option value="groceries"> Groceries </option>
        <option value="fragrences"> Fragrences </option>
        <option value="furniture"> Furniture </option>
         <option value="beauty"> Beauty </option>
     </select>
</div>
     </div>
  )
}

export default Filters