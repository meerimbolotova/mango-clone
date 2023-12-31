import React from "react";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import ProductDetails from "../components/products/ProductDetails";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <ProductsPage />, id: 2 },
    { link: "*", element: <NotFoundPage />, id: 3 },
    { link: "/register", element: <RegisterPage />, id: 4 },
    { link: "/login", element: <LoginPage />, id: 5 },
    { link: "/admin", element: <AdminPage />, id: 6 },
    { link: "/details/:id", element: <ProductDetails />, id: 7 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
