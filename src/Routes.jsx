import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-red-600">
            <HomePage />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div className="bg-red-600">
            <AboutPage />
          </div>
        }
      />
      <Route
        path="/menu"
        element={
          <div className="bg-red-600">
            <MenuPage />
          </div>
        }
      />
    </Routes>
  );
};

export default MyRoutes;
