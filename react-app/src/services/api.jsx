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

// Gửi yêu cầu đăng nhập
export const fetchLogin = async (username, password) => {
  const credentials = { username, password };
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    console.log("Đăng nhập thành công");
    //Luu token vao sessionStorage
    sessionStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("login failed", error);
    throw error;
  }
};

// Lay du lieu user vua dang nhap
export const fetchUserData = async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    console.error("Khong co token, vui long dang nhap lai");
    return null;
  }
  // Hàm giải mã JWT để lấy user ID
  const getUserIdFromToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Giải mã phần payload
      return payload.sub; // "sub" là ID của user trong Fake Store API
    } catch (error) {
      console.error("Lỗi khi giải mã token:", error);
      return null;
    }
  };

  const userId = getUserIdFromToken(token);
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = response.data;
    const email = response.data.email;
    console.log("Du lieu nguoi dung: ", userData);
    console.log("Du lieu nguoi dung: ", email);
    return { userData, email };
  } catch (error) {
    console.error("Loi khi lay du lieu nguoi dung: ", error);
  }
};

// Get user
export const fetchGetUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    
    console.log("Thanh cong Get user");
    return response.data;
  } catch (error) {
    console.error("Get user failed", error);
    throw error;
  }
};

// post user //them user
export const fetchAddUser = async (username, email, password) => {
  const credentials = { username, email, password };
  try {
    const response = await axios.post(`${BASE_URL}/users`, credentials);
    console.log("add user: ", response.data);
    
    return response.data;
  } catch (error) {
    console.log(" Error adding user:: ", error);
    throw error;
  }
};


