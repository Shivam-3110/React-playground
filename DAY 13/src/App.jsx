import React, { useContext, useEffect } from 'react'
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import axios from "axios";
import CartPage from './Pages/CartPage';
import { myStore } from './context/MyContext';

export default function App() {
  let {isCartOpen,cartItems} =  useContext(myStore);
      const [productsData , setProductsData]= useState([])

  const getProductsData = async() =>{
   try {
     const res = await axios("https://fakestoreapi.com/products");
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
    <div className="h-screen p-2 flex flex-col gap-4">
    <Navbar/>
    {
       isCartOpen ? (<div className="grid grid-cols-4 gap-4">
    <CartPage/> </div>): (<div className="grid grid-cols-4 gap-4">
      {productsData.map((elem) => {
           
      let isInCart = cartItems.find((val) =>val.id === elem.id)

        return <ProductCard key={elem.id} product={elem} isInCart={isInCart}/>
      })}
    </div>)
   
    }
    <ToastContainer/>
    </div>
  )
}