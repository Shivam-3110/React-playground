import React from "react";
import axios from "./api/axiosconfig";

const App =() => {
    const getProduct = async () => {
        try {
            const res = await axios.get("/products")
        } catch (error) {
            console.error("Error fetching product:", error)
        }
    }
    useEffect(() => {
        getProduct();
    },[]);


}