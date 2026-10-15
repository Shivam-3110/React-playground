import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [searchTerm, setSearchTerm] = useState(null)
  const [products, setProducts] = useState([])
  const [scroll , setScroll] = useState(null);
  let throttle = true;
  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data)
    setProducts(response.data)
  }
  const filteredData = () =>{
    let result = products.filter((val) =>{
      return val.title.toLowerCase().includes(searchTerm.toLowerCase()) ;
    })
    setProducts(result);
  }
  // deboucing..
    useEffect(() =>{
      if(!searchTerm) return;
    let timeOut = setTimeout(()=>{
      filteredData()
      },700) 
      return () => clearTimeout(timeout);
    },[searchTerm])

    // throttling
    useEffect(() => {
     

      let handleScroll =() => {
         if(throttle) return;
      console.log("scroll trigreed");
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[])
  

    useEffect(() => {
      getProducts()
    }, [])
  
  return (
    <div>Debouncing
      <hr></hr>
    <input className="w-25% outline-black bg-transparent text-gray-700 placeholder-gray-400"
     onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search' />
    {
      products.map((product) => {
      return   <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          
        </div>
    })
    }
    </div>
  )
}

export default App