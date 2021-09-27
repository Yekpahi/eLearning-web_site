import { useState, useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  UserAddOutlined,
  AppstoreOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("")
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])
  return (
    <Menu mode="horizontal" selectedKeys = {current}>
      <Item 
      key = "/"
      onClick = {(e) => setCurrent(e.key)}
      icon={<AppstoreOutlined />}
      >
        <Link href="/">
          <a href="">Home</a>
        </Link>
      </Item>

      <Item
      key ="/login" 
      onClick = {(e) => setCurrent(e.key)}
      icon={<LoginOutlined />}
      >
        <Link href="/login">
          <a href="">Login</a>
        </Link>
      </Item>

      <Item 
      key ="/register " 
      icon={<UserAddOutlined />}
      onClick = {(e) => setCurrent(e.key)}
      >
        <Link href="/register">
          <a href="">Register</a>
        </Link>
      </Item>
    </Menu>
  );
};

export default TopNav;
