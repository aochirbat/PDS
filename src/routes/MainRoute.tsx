import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = React.lazy(() => import("modules/Login/Login"));

const { Header, Content, Sider } = Layout;

const MainRoute = () => {
  const auth = false;
  return (
    <Router>
      <Switch>
        {auth ? (
          <Route path={"/"}>
            <Login />
          </Route>
        ) : (
          <Layout>
            <Sider width={200} className="web-sider"></Sider>
            <Layout style={{ padding: "20px 0 0 20px" }}>
              <Content>Content</Content>
            </Layout>
          </Layout>
        )}
      </Switch>
    </Router>
  );
};

export default MainRoute;
