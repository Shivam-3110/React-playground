import React, { useEffect, useState } from 'react'
 
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInstance';
function ProductPage() {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

    const getProductData = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Could not load products. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

  useEffect(() => {
    getProductData();
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div role="alert">{error}</div>;
  }
  
  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {
        productData.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))
      }
    </div>
  )
}

export default ProductPage;