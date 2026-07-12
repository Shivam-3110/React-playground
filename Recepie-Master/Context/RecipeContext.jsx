import React from 'react'
import {useState} from 'react'

export const Recipecontext = React.createContext(null);


export default function RecipeContext(props) {
   const [data,setdata] = useState([
    {
      id:1,
      title : "Chicken Biryani",
      category:"Dinner",
      ingredients:["Chicken","Rice","Onion","Tomato","Spices"],
      instructions:"Cook chicken and rice separately. Layer them and cook together.",
      image:"https://static.vecteezy.com/system/resources/thumbnails/054/743/053/small/mouthwatering-biryani-with-flavorful-rice-and-tender-chicken-pieces-free-photo.jpg"
    }
   ]);
   console.log(data);
  return (
   <Recipecontext.Provider value={{data,setdata}}> {props.children}  </Recipecontext.Provider>
  )
}
  