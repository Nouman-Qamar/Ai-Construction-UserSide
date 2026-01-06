// 🔥 REFACTORED: Electrical.jsx is now a reusable CARD COMPONENT
// This component displays electrical wiring job information
// It accepts job data as props and renders a card with navigation to detail page

import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Tag, Button } from "antd";
import {
  EnvironmentOutlined,
  DollarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "./jobs.css";

const Electrical = ({ jobData }) => {
  const navigate = useNavigate();

  // ✅ MODIFIED: Navigate to detail page with job ID
  const handleViewDetails = () => {
    navigate(`/projects/${jobData.id}`);
  };

  return (
    <Card className="project-card" hoverable>
      <div className="card-header">
        {/* 🔥 MODIFIED: Dynamic status tag */}
        <Tag color={jobData.status === "open" ? "green" : "blue"}>
          {jobData.status.replace("_", " ").toUpperCase()}
        </Tag>
        <span className="category">{jobData.category}</span>
      </div>

      {/* 🔥 MODIFIED: Dynamic title and description from props */}
      <h3>{jobData.title}</h3>
      <p className="desc">{jobData.description}</p>

      {/* 🔥 MODIFIED: Dynamic job metadata */}
      <div className="meta">
        <span>
          <EnvironmentOutlined /> {jobData.location.city}
        </span>
        <span>
          <DollarOutlined /> ${jobData.budget.min} – ${jobData.budget.max}
        </span>
        <span>
          <ClockCircleOutlined /> {jobData.bidsCount} bids
        </span>
      </div>

      {/* 🔥 MODIFIED: View Details button navigates to dynamic detail page */}
      <Button type="primary" block onClick={handleViewDetails}>
        View Details
      </Button>
    </Card>
  );
};

export default Electrical;
