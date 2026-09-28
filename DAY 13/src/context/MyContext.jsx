import { createContext, useState } from "react";

// Create Context
export const myStore = createContext();

// Context Provider
export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? {...val , quantity:val.quantity+1} : val ;
      })
    })
  }
    const decrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? {...val , quantity:val.quantity-1} : val ;
      })
    })
  }

  return (
    <myStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </myStore.Provider>
  );
};