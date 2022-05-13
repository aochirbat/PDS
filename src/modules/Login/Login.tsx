import React from "react";
import { Form, Input, Button, Checkbox, Card, Row, notification } from "antd";
import "./Login.less";
import { Content } from "antd/lib/layout/layout";
import useAuth from "reducers/authReducer";
import { navigationService } from "providers/navigation";
import { useNavigate } from "react-router-dom";
import { api } from "services/api";
import Base64 from "component/Base64/base64";
import { useState } from "react";

interface Login {
  domain: string;
  password: string;
  checkbox: true;
}

const Login = () => {
  const navigate = useNavigate();
  const login = useAuth((state) => state.login);
  const [loading, setLoading] = useState(false);
  const OnFinish = (values: Login) => {
    setLoading(true);
    const params = {
      grant_type: "password",
      username: values?.domain,
      password: values?.password,
    };

    api({
      baseUrl: "https://doob.world:6499/v1",
    })
      .post(
        "deskLogin/auth",
        {},
        {
          params: params,
          headers: {
            Authorization: `Basic ${Base64.btoa(
              "5n6TXOCukl2GPXERit7DNtJ0nrvUl8zT" + ":" + "D5ZIAKoSGnxQroHI"
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response: any) => {
        setLoading(false);
        console.log("hello", response);
        login();
        notification.success({
          message: `Амжилттай нэвтэрлээ.`,
          description: `${response?.data?.first_name}`,
          placement: "top",
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        notification.error({
          message: `Нэвтрэлт хийх үед алдаа гарлаа.`,
          description: `${error?.message}`,
          placement: "top",
        });
      });
  };
  return (
    <Content className="login-content">
      <Card
        hoverable
        className="shadow login-card radius8"
        style={{ width: "320px" }}
      >
        <div className="f18TextCenter" style={{ marginBottom: "24px" }}>
          <img
            src="https://www.khanbank.com/assets/logos/khanbank-mn.png"
            width={"200px"}
          />
        </div>
        <Form
          name="Login"
          labelCol={{ span: 16 }}
          onFinish={OnFinish}
          layout="vertical"
        >
          <Form.Item
            name="domain"
            label="domain"
            rules={[{ required: true }, { type: "string", min: 5 }]}
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
          <Row justify="center">
            <Button
              type="primary"
              htmlType="submit"
              className="login-button radius8"
              loading={loading}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
    </Content>
  );
};
export default Login;
