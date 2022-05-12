import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { DashboardOutlined, TeamOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import PrivateRoutes from "./PrivateRoutes";
import Menus from "Layout/Sider/Menus";
import MainLayout from "Layout/Main/MainLayout";
import Dashboard from "modules/Dashboard/Dashboard";
import ProductDetails from "modules/ProductDetails/ProductDetails";

const Login = React.lazy(() => import("modules/Login/Login"));

const { Content, Sider } = Layout;

const MainRoute = () => {
  const auth = true;
  const PrivateRoute = ({ children, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  return (
    <Switch>
      <Route path={"/login"}>
        <Login />
      </Route>
      <PrivateRoute exact={true} path={"/dashboard"}>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </PrivateRoute>
      <PrivateRoute exact={true} path={"/details"}>
        <MainLayout>
          <ProductDetails />
        </MainLayout>
      </PrivateRoute>
    </Switch>
  );
};

export default MainRoute;
