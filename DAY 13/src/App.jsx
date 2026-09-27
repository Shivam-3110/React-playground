import React, { useEffect } from 'react'
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import axios from "axios";
import CartPage from './Pages/CartPage';
export default function App() {
  const [productsData , setProductsData]= useState([])
   const [isCartOpen , setisCartOpen] = useState(false);
   const [cartItems , setCartItems] = useState([]);

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
    <Navbar setisCartOpen={setisCartOpen}/>
    {
       isCartOpen ? <div className="grid grid-cols-4 gap-4">
    <CartPage cartItems={cartItems}/> </div>: <div className="grid grid-cols-4 gap-4">
      {productsData.map((elem) => {
        return <ProductCard key={elem.id} product={elem} setCartItems={setCartItems}/>
      })}
    </div>
   
    }
    <ToastContainer/>
    </div>
  )
}