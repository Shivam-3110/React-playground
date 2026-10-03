import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function ProductDetails() {
    const [singleProductData , setSingleProductData] = useState({});
    let {id} = useParams();
    const getProductById = async() =>{
        try {
           const res = await axios.get(`https://fakeStoreapi.com/products/${id}`) 
           setSingleProductData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
   useEffect(() => {
    getProductById()
   },[])
  return (
    <div> this ProductDetails dynasmic page </div>
  )
}

export default ProductDetails