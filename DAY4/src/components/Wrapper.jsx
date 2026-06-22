import React, { createContext } from 'react'
import { useState } from "react";
  export const todoContext = createContext(null);


function Wrapper(props) {
   const [todos, settodos] = useState([
      {id:1,title:"JS",isCompleted:false},
    ]);
    console.log(props)
  return (
    <div>
    <todoContext.Provider value={[todos , settodos]}> {props.children}  </todoContext.Provider> 
    </div>
  )
}

export default Wrapper
