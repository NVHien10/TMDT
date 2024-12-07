// src/services/api.js
import axios from "axios";


const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (categoryFilter = "") => {
  const url = categoryFilter
    ? `${BASE_URL}/products/category/${categoryFilter}`
    : `${BASE_URL}/products`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/products/categories`);
  return response.data;
};

//lấy thông tin sản phẩm theo ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// //lấy thông tin sản phẩm theo category
// export const fetchProductByCategory = async (category) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/products/${category}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching product by category:", error);
//     throw error;
//   }
// };

