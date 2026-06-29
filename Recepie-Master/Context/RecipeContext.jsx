import React from 'react'
import {useState} from 'react'

export const Recipecontext = React.createContext(null);


export default function RecipeContext(props) {
   const [data,setdata] = useState([]);
   console.log(data);
  return (
   <Recipecontext.Provider value={{data,setdata}}> {props.children}  </Recipecontext.Provider>
  )
}
