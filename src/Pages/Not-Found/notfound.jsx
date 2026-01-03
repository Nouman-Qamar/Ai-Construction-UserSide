import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-content">
        <div className="notfound-icon">🏗️</div>

        <h1 className="notfound-title">Page Not Found</h1>

        <p className="notfound-description">
          The page you're looking for is under construction.
        </p>

        <Link to="/">
          <Button
            type="primary"
            size="large"
            icon={<HomeOutlined />}
            className="theme-primary-btn"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
