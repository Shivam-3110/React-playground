import { useQuery } from "@tanstack/react-query"
import { getProductsData } from "../apis/productApi"
import { useEffect } from "react";

 export const  useProductApi = () => {
  const [filteredProducts, setFilterProducts] = useState(null);
    let {data,isPending,error} = useQuery({
  queryKey:["products"],
  queryFn:getProductsData,
  staleTime:5000
 })

 let filterProducts = (searchParams) => {
   let filteredData =  data.filter((val) => val.title.toLowerCase().includes(searchParams.toLowerCase));
 }

 if(filteredData){
   setFilterProducts(filteredData);
 } 

 useEffect(() => {
    setFilterProducts(data);
 },[data]);
  

 return {
    isPending,data,error,filterProducts,filteredProducts
 }
}

