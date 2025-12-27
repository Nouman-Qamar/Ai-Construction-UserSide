import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Radio,
  Checkbox,
  message,
  Modal,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("client");
  const [forgotOpen, setForgotOpen] = useState(false);

  const onFinish = (values) => {
    const { email, password } = values;

    if (email && password) {
      message.success(
        `Logged in successfully as ${role.toUpperCase()} 🎉`
      );
    }
  };

  const handleForgotPassword = (values) => {
    message.success(
      `Password reset link sent to ${values.email} 📧`
    );
    setForgotOpen(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
    
        <div className="login-image">
          <div className="image-overlay">
            <h2>Build Smarter, Together</h2>
            <p>
              Connecting contractors, labourers, and clients on
              one powerful construction platform.
            </p>
          </div>
        </div>

     
        <div className="login-form-section">
          <Card className="login-card">
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">
              Sign in to continue
            </p>

            <Radio.Group
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="role-group"
            >
              <Radio.Button value="contractor">
                Contractor
              </Radio.Button>
              <Radio.Button value="labourer">
                Labourer
              </Radio.Button>
              <Radio.Button value="client">
                Client
              </Radio.Button>
            </Radio.Group>

            <Form
              layout="vertical"
              onFinish={onFinish}
              className="login-form"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                  },
                  {
                    type: "email",
                    message: "Enter a valid email",
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                  {
                    min: 6,
                    message: "Minimum 6 characters",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                />
              </Form.Item>

              <div className="login-options">
                <Checkbox>Remember me</Checkbox>
                <span
                  className="forgot"
                  onClick={() => setForgotOpen(true)}
                >
                  Forgot password?
                </span>
              </div>

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="login-btn"
              >
                Login
              </Button>

              
              <p className="signup-link">
                Don’t have an account?{" "}
                <Link to="/signup">Create one</Link>
              </p>
            </Form>
          </Card>
        </div>
      </div>

     
      <Modal
        title="Reset Password"
        open={forgotOpen}
        onCancel={() => setForgotOpen(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleForgotPassword}
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                message: "Email is required",
              },
              {
                type: "email",
                message: "Enter a valid email",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="Enter your registered email"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            className="login-btn"
          >
            Send Reset Link
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;