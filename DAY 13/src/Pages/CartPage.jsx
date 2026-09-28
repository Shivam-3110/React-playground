
import React from "react";
import Cartcard from "../components/Cartcard";
import { useContext } from "react";
import { myStore } from "../context/MyContext";

function CartPage() {
  let {cartItems} = useContext(myStore);
  return(
    <div className="h-[95%] text-6xl grid grid-rows-3">
       {cartItems.map((elem) => {
          return <Cartcard key={elem.id} product={elem}/>
       })}
    </div>
  )
}

export default CartPage;

