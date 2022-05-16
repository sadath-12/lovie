import React, { createContext, useState } from "react";
export const cartContextTwo = createContext();

const CartContextTwoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemsToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
    if (itemExists) return;
    setCartItems([...cartItems, item]);
  };

  const removeItemsFromCart = (item) => {
    const filter = cartItems.filter((i) => i.removeId !== item);
    setCartItems(filter);
  };

  return (
    <cartContextTwo.Provider
      value={{
        cartItems,
        setCartItems,
        removeItemsFromCart,
        addItemsToCart,
        total,
        setTotal,
      }}
    >
      {children}
    </cartContextTwo.Provider>
  );
};

export default CartContextTwoProvider;
