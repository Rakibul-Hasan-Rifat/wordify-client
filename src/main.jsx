import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddBlogPage from "./pages/AddBlogPage.jsx";
import AllBlogsPage from "./pages/AllBlogsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/add-blog" element={<AddBlogPage />} />
          <Route path="/all-blogs" element={<AllBlogsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
