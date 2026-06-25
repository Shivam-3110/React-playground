import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from '../components/Home.jsx'
import Product from '../components/Product.jsx'
import Service from '../components/service.jsx'
import About from '../components/About.jsx'
import ProductDetails from '../components/ProductDetails.jsx';
import ServiceDetails from '../components/ServiceDetails.jsx';

export default function Mainroutes() {
  return (
     <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/product" element={<Product />}/>
          <Route path="/product/detail/:name" element={<ProductDetails />}/>

          <Route path="/service" element={<Service/>}> 
          <Route path="/service/details" element={<ServiceDetails/>}/>
          </Route>
           <Route path="/about" element={<About />}/>
    </Routes>
  )
}
