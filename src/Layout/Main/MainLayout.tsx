import React from "react";
import { Drawer, Layout, Row } from "antd";
import Menus from "Layout/Sider/Menus";
import { useState } from "react";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import useAuth from "reducers/authReducer";

const MainLayout = ({ children }: any) => {
  const { Content, Sider, Header } = Layout;
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const logout = useAuth((state) => state.logOut);
  return (
    <Layout>
      <Header className="header shadow">
        <img
          src="https://www.khanbank.com/assets/logos/khanbank-mn.png"
          width={"100px"}
        />
        <div className="burger-menu" onClick={() => setVisibleDrawer(true)}>
          <MenuOutlined />
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="web-sider">
          <Menus />
          <Row justify="center">
            <div className="log-out" onClick={logout}>
              <LogoutOutlined style={{ fontSize: "18px" }} />
            </div>
          </Row>
          <Drawer
            title="menu"
            placement="left"
            closable={false}
            onClose={() => setVisibleDrawer(false)}
            visible={visibleDrawer}
            width={"70%"}
          >
            <Menus />
            <Row justify="center">
              <div className="log-out" onClick={logout}>
                <LogoutOutlined style={{ fontSize: "18px" }} />
              </div>
            </Row>
          </Drawer>
        </Sider>
        <Layout style={{ padding: "20px 0 0 20px" }}>
          <Content className="web-content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
