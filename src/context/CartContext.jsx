import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();
export function CartProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (currentUser) {
      const storedOrders =
        JSON.parse(localStorage.getItem(`orders_${currentUser.email}`)) || [];

      setOrders(storedOrders);
    }
  }, [currentUser]);
  const addToCart = (item) => {
    if (!currentUser) {
      alert("Please login first");
      return;
    }
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(
        cart.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };
  const saveOrder = (order) => {
    const userOrders =
      JSON.parse(localStorage.getItem(`orders_${currentUser.email}`)) || [];
    userOrders.push(order);
    localStorage.setItem(
      `orders_${currentUser.email}`,
      JSON.stringify(userOrders)
    );
    setOrders(userOrders);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, setCart, orders, addToCart, saveOrder, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}