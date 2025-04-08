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
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import DataProvider from "./providers/DataProvider.jsx";
import FeaturedBlogsPage from "./pages/FeaturedBlogsPage.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/add-blog"
                element={
                  <PrivateRoute>
                    <AddBlogPage />
                  </PrivateRoute>
                }
              />
              <Route path="/all-blogs">
                <Route index element={<AllBlogsPage />} />
                <Route path="/all-blogs/:blogId" element={<BlogDetails />} />
                <Route path="/all-blogs/update/:blogId" element={<UpdatePage />} />
              </Route>
              <Route path="/featured-blogs" element={<FeaturedBlogsPage />} />
              <Route
                path="/wishlist"
                element={
                  <PrivateRoute>
                    <WishlistPage />
                  </PrivateRoute>
                }
              />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
