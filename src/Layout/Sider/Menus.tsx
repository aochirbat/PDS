import React from "react";
import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { DashboardOutlined, TeamOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];
const Menus = () => {
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem(
      <Link to={"/dashboard"}>Dashboard</Link>,
      "1",
      <DashboardOutlined />
    ),
    getItem("Categories", "2", <TeamOutlined />, [
      getItem(
        <Link to={{ pathname: "/details", state: "1" }}>Card</Link>,
        "3",
        <TeamOutlined />
      ),
      getItem(<Link to={"/details"}>Back office</Link>, "4", <TeamOutlined />),
      getItem("Core", "5", <TeamOutlined />),
      getItem("Customer", "6", <TeamOutlined />),
    ]),
  ];

  return (
    <Menu
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      items={items}
      mode="inline"
    />
  );
};

export default Menus;
