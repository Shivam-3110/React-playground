import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { myStore } from '../context/MyContext'
import ProductCard from "../components/ProductCard"

function Home() {
    let {productsData,setProductsData} = useContext(myStore);

    const getProductsData = async() => {
        try {
              let response = await axios.get("https://fakestoreapi.com/products"); 
              setProductsData(response.data);
        } catch (error) {
            console.log(error)
        }
    }
 useEffect(()=>{
     getProductsData()
 },[])
  return (
    <div className='grid grid-cols-4 p-2 '>
       {
        productsData.map((val) => {
            return <ProductCard key={val.id} product={val}/>
        })
       }
    </div>
  )
}

export default Home