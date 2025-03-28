import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import AddBlogPage from "./pages/AddBlogPage.jsx";
import AllBlogsPage from "./pages/AllBlogsPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import FeaturedBlogsPage from "./pages/FeaturedBlogsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/add-blog" element={<AddBlogPage />} />
            <Route path="/all-blogs" element={<AllBlogsPage />} />
            <Route path="/featured-blogs" element={<FeaturedBlogsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
