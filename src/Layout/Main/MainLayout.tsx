import { Layout } from "antd";
import Menus from "Layout/Sider/Menus";
import React from "react";

const MainLayout = ({ children }: any) => {
  const { Content, Sider } = Layout;
  return (
    <Layout>
      <Sider width={200} className="web-sider">
        <Menus />
      </Sider>
      <Layout style={{ padding: "20px 0 0 20px" }}>
        <Content className="web-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
