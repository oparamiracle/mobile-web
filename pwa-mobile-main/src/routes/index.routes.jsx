import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexLayout from "../layouts/index.layout";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
