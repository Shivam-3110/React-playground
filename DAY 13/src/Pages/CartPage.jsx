
import React from "react";
import Cartcard from "../components/Cartcard";

function CartPage({cartItems}) {
  return(
    <div className="h-[95%] text-6xl grid grid-rows-3">
       {cartItems.map((elem) => {
          return <Cartcard key={elem.id} product={elem}/>
       })}
    </div>
  )
}

export default CartPage;

