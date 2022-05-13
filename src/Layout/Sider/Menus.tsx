import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { DashboardOutlined, TeamOutlined } from "@ant-design/icons";
import { api } from "services/api";
import useAuth from "reducers/authReducer";
import { useEffect } from "react";

type MenuItem = Required<MenuProps>["items"][number];
const Menus = () => {
  const access_token = useAuth((state) => state.access_token);
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    api
      .get("/systemexpo/devops/mock/products", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => setProducts(response?.data));
    setProducts(products);
  }, []);

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
      "Categories",
      "2",
      <TeamOutlined />,
      products?.map((e: any, index: number) => {
        return getItem(
          <Link to={"/dashboard"} state={e?.id}>
            {e?.name.toUpperCase()}
          </Link>,
          index + 3,
          <TeamOutlined />
        );
      })
    ),
  ];
  return (
    <Menu
      style={{ width: "100%" }}
      defaultSelectedKeys={["2"]}
      items={items}
      mode="inline"
      defaultOpenKeys={["3"]}
    />
  );
};

export default Menus;
