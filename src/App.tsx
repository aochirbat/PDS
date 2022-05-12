import React from "react";
import { Layout } from "antd";
import { createBrowserHistory } from "history";
import MainRoute from "routes/MainRoute";
import "./theme/theme.less";

export const history = createBrowserHistory();

function App() {
  return (
    <Layout className="web-container">
      <MainRoute />
    </Layout>
  );
}

export default App;
