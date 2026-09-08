import React from 'react'

function ProductsCard({product,del}) {
  return (
    <div className='p-2 border-2 flex flex-col rounded'>
        <div className='w-60'>
            <img src={product.image} alt={product.category}/>
        </div>
        <div>
            <h2 className='font-stretch-semi-condensedbold'> Name:{product.title.substring(0,20)} </h2>
            <p  className='text-xs'> Category:{product.category} </p>
            <p className='text-green-600'> Price {product.price} </p>
        </div>
        <button  onClick={()=> del() }className='p-2 bg-red-500'> Delete </button>
    </div>
  )
}

export default ProductsCard