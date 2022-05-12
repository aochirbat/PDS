import { Layout } from "antd";
import React from "react";
import MainRoute from "routes/MainRoute";
import "./theme/theme.less";

function App() {
  return (
    <Layout>
      <MainRoute />
    </Layout>
  );
}

export default App;
