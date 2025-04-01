import { createContext, useContext, useState, useEffect } from "react";
import React from 'react';

// Tạo Context cho giỏ hàng
export const CartContext = createContext();

// Tạo custom hook `useCart` để sử dụng `CartContext`
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Khởi tạo cart từ localStorage hoặc mảng trống
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // Lưu cart vào localStorage mỗi khi cart thay đổi
  useEffect(() => {
    console.log("Cart:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        return prevCart.filter((item) => item.id !== product.id);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
