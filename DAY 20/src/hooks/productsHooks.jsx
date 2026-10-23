import { useQuery } from "@tanstack/react-query"
import { getProductsData } from "../apis/productApi"

 export const  useProductApi = () => {
    let {data,isPending,error} = useQuery({
  queryKey:["products"],
  queryFn:getProductsData,
  staleTime:5000
 })

 let filterProducts = (searchParams) => {
   let filteredData =  data.filter((val) => val.title.toLowerCase().includes(searchParams.toLowerCase));
 }


 return {
    isPending,data,error
 }
}

