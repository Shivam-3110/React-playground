import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function ShopPage() {
const [productsData , setProductsData] = useState([])
const getProductsData = async () => {
try {
const res = await axios.get('https://dummyjson.com/products');
console.log(res.data.products);
setProductsData(res.data.products)
} catch (error) {
console.log('Error in products API', error);
}
};

useEffect(() => {
getProductsData();
}, []);

return (
   <div className="min-h-screen bg-black p-8">

 <div className='mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  {
  productsData.map((val) => {
    return <ProductCard key = {val.id} product={val}/>
  })}
 </div>

   </div>
);
}

export default ShopPage;
