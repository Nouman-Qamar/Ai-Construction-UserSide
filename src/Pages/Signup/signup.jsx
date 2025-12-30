import React, { useState } from "react";
import { Form, Input, Button, Card, Radio, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [role, setRole] = useState("client");

  const onFinish = (values) => {
    console.log(values);

    message.success(`Account created successfully as ${role.toUpperCase()} 🎉`);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <div className="signup-image">
          <div className="image-overlay">
            <h2>Join Our Construction Platform</h2>
            <p>
              Contractors, labourers, and clients — connect and build smarter
              together.
            </p>
          </div>
        </div>

        <div className="signup-form-section">
          <Card className="signup-card">
            <h2 className="signup-title">Create Account</h2>
            <p className="signup-subtitle">Register to get started</p>

           

            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Enter your full name"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Password is required" },
                  { min: 6, message: "Minimum 6 characters" },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Create password"
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Confirm password"
                />
              </Form.Item>

              <Form.Item
                name="terms"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("You must accept terms & conditions")
                          ),
                  },
                ]}
              >
                <Checkbox>
                  I agree to the{" "}
                  <span className="terms">Terms & Conditions</span>
                </Checkbox>
              </Form.Item>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                block
                className="signup-btn"
              >
                Create Account
              </Button>

             
            </Form>

            <p className="signup-link">
              Already have an account? <Link to="/login-as">Login here</Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
