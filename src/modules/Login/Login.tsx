import React from "react";
import { Form, Input, Button, Checkbox, Card, Row } from "antd";
import "./Login.less";

interface Login {
  domain: string;
  password: string;
  checkbox: true;
}

const Login = () => {
  const OnFinish = (values: Login) => {
    console.log("values", values);
  };
  return (
    <Row justify="center">
      <Card hoverable className="shadow-card login-card">
        <Form name="Login" labelCol={{ span: 8 }} onFinish={OnFinish}>
          <Form.Item
            name="domain"
            label="domain"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Row>
  );
};
export default Login;
