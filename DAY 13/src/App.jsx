import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
export default function App() {
  const [productsData , setProductsData]= useState([])


  const getProductsData = async() =>{
   try {
     const res = await axios.get("https://fakestoreapi.com/products/");
    console.log(res);
    setProductsData(res.data);
   } catch (error) {
    console.log(error)
   }
  }
   useEffect(() => {
      getProductsData();
    },[])
  return (
    <div className="h-screen p-2">
    <Navbar/>
    <div>
      {productsData.map((elem) => {
        return <ProductCard product={elem}/>
      })}
   <ProductCard/>
    </div>
   
    </div>
  )
}
