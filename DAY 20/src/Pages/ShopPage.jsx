import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import { useProductApi } from "../hooks/productsHooks";
import Filters from "../components/Filters";


function ShopPage() {
 let {isPending,data,error} =  useProductApi()



if (isPending) {
return <p className="p-10 text-center">Loading products...</p>;
}

return ( <div className="min-h-screen bg-black px-5 py-10"> <h1 className="mb-2 text-center text-3xl font-bold text-orange-900">
Our Products </h1>

  <p className="mb-10 text-center text-white-500">
    Discover products you'll love.
  </p>
   <Filters/>
  <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {data.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>


);
}

export default ShopPage;
