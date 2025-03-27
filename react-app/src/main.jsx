import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header";
import Electronic from "./components/Electronic.jsx";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import NavHeader from "./NavHeader.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import CategoryShow from "./components/CategoryShow.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ShowCart from "./components/ShowCart.jsx";
import Login from "./components/Login.jsx";

const GOOGLE_CLIENT_ID =
  "939477678892-o19m8j8jh2ssgcodtv3jilfbsakonh0p.apps.googleusercontent.com"; // Thay thế bằng clientId

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Electronic" element={<Electronic />} />
            <Route path="/ResponsiveMenu" element={<ResponsiveMenu />} />
            <Route path="/NavHeader" element={<NavHeader />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ShowCart" element={<ShowCart />} />
            <Route path="/CategoryShow" element={<CategoryShow />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
