import React from "react";
import { Route, Switch } from "react-router-dom";

const Dashboard = React.lazy(() => import("modules/Dashboard/Dashboard"));
const ProductDetails = React.lazy(
  () => import("modules/ProductDetails/ProductDetails")
);

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/details">
        <ProductDetails />
      </Route>
    </Switch>
  );
};

export default PrivateRoutes;
