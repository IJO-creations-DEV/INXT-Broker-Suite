import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UnProtectedRoutes from "./UnProtectedRoutes";
import LoginScreen from "../module/AuthModule/Login/index";
import Cookies from "js-cookie";

const AuthRoute = () => {
  const token = Cookies.get("token");
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginScreen />} exact />
        <Route
          path=""
          element={token ? <Navigate to="/home" /> : <UnProtectedRoutes />}
        />
      </Routes>
    </>
  );
};

export default AuthRoute;
