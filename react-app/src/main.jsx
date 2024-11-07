import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header";
import Electronic from "./components/Electronic.jsx";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import NavHeader from "./NavHeader.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Electronic" element={<Electronic />} />
        <Route path="/ResponsiveMenu" element={<ResponsiveMenu />} />
        <Route path="/NavHeader" element={<NavHeader />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
