import React from "react";
import { Card, Typography } from "antd";
import {
  FileTextOutlined,
  ToolOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./selectlogin.css";

const { Title, Paragraph } = Typography;

export default function LoginAs() {
  const navigate = useNavigate();

  return (
    <div className="login-as-page">
      <Title level={2} className="login-title">
        Login as
      </Title>

      <div className="login-card-wrapper">
        <Card
          hoverable
          className="login-card"
          onClick={() => navigate("/login")}
        >
          <div className="icon-box">
            <FileTextOutlined />
          </div>
          <Title level={4}>Client</Title>
          <Paragraph>
            Create order requests and receive offers for your projects.
          </Paragraph>
        </Card>

        <Card
          hoverable
          className="login-card"
          onClick={() => navigate("/login")}
        >
          <div className="icon-box">
            <ToolOutlined />
          </div>
          <Title level={4}>Contractor</Title>
          <Paragraph>
            Gain access to new orders and manage your services.
          </Paragraph>
        </Card>

        <Card
          hoverable
          className="login-card"
          onClick={() => navigate("/login")}
        >
          <div className="icon-box">
            <BankOutlined />
          </div>
          <Title level={4}>Labour</Title>
          <Paragraph>
            Gain access to new orders for your company.
          </Paragraph>
        </Card>
      </div>

      <p className="register-text">
        Don&apos;t have an account?{" "}
        <span onClick={() => navigate("/signup")}>Register here!</span>
      </p>
    </div>
  );
}
