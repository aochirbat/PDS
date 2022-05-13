import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import MainLayout from "Layout/Main/MainLayout";
import Dashboard from "modules/Dashboard/Dashboard";
import ProductDetails from "modules/ProductDetails/ProductDetails";
import useAuth from "reducers/authReducer";
import Login from "modules/Login/Login";

const { Content, Sider } = Layout;

const MainRoute = () => {
  const auth = useAuth((state) => state.auth);
  console.log("auth", auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth === false) {
      navigate("/");
    }
  }, [auth]);
  return (
    <Routes>
      <Route path={"/"} element={<Login />}></Route>
      <Route path={"/login"} element={<Login />}></Route>
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/details"
        element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default MainRoute;
