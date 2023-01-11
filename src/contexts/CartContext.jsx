import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if there is same product
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if there is same product then increase the quantity
  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // or return new array with modfied cartItem
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find if product is existing in cart
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // if product quantity equal to 1,remove the product and keep the remianing items
  if (existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  // return back cartItems remaining after reducing
  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartProduct = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearCartItem: () => {},
  cartCounts:0,
  cartTotal:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounts, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(()=>{
    const newCartCount = cartItems.reduce(
        (total,cartItem) => total + cartItem.quantity,0
    );
    setCartCount(newCartCount);
  },[cartItems]);

  useEffect(()=>{
    const cartTotalAmount = cartItems.reduce(
        (total,cartItem)=> total + cartItem.quantity * cartItem.price,0
    );
    setCartTotal(cartTotalAmount)
  },[cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearCartItem = (productToClear) => {
    setCartItems(clearCartProduct(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    removeItemToCart,
    cartCounts,
    clearCartItem,
    cartTotal
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
