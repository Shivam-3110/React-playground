import React from "react";
import { useEffect } from "react";
import { asyncgetusers } from "./store/userActions";
import { useDispatch , useSelector } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
const App = () => {
    const data = useSelector((state)=>state.user.data);
    const dispatch = useDispatch();
    useEffect(() => {
        asyncgetusers();
    },[]);
  
    return <div className="text-white font-thin  w-screen h-screen bg-gray-800"> App </div>;
    <Mainroutes />;
    <Nav /> ;
    
}


export default App; 