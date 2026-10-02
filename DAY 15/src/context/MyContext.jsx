import { createContext, useState } from "react";

export const myStore = createContext();

export const ContextProvider = ({children}) => {
    const [productsData,setProductsData] = useState([]);

    return (
        <myStore.Provider value = {{productsData,setProductsData}}>
         {children}
        </myStore.Provider>
    );
}