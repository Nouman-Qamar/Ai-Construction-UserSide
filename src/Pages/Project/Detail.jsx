// 🔥 DYNAMIC DETAIL PAGE COMPONENT
// This page loads job data based on the route ID using useParams()
// Displays job details and allows users to apply for the job
// Reuses ApplyModal component for consistent form handling

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Tag,
  Empty,
  Spin,
  Divider,
  Row,
  Col,
  Avatar,
  Rate,
  Badge,
} from "antd";
import {
  EnvironmentOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { getJobById } from "./jobsData";
import ApplyModal from "./ApplyModal";
import "./jobs.css";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔥 MODIFIED: Get job data dynamically based on route ID
  const job = getJobById(id);

  // ✅ HANDLE: Show empty state if job not found
  if (!job) {
    return (
      <div className="detail-page">
        <div className="container">
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(-1)}
            style={{ marginBottom: "20px" }}
          >
            Go Back
          </Button>
          <Empty description="Job not found" style={{ marginTop: "50px" }}>
            <Button type="primary" onClick={() => navigate("/projects")}>
              View All Projects
            </Button>
          </Empty>
        </div>
      </div>
    );
  }

  // ✅ HANDLE: Form submission callback
  const handleApplySubmit = async (formData) => {
    // In a real app, you would send this to your backend
    console.log("Application submitted:", {
      jobId: job.id,
      jobTitle: job.title,
      ...formData,
    });
    // Backend call would happen here
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };

  return (
    <div className="detail-page">
      <div className="container">
        {/* 🔥 MODIFIED: Back button */}
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Go Back
        </Button>

        <Row gutter={[24, 24]}>
          {/* 🔥 MODIFIED: LEFT COLUMN - Main job details */}
          <Col xs={24} md={16}>
            {/* Header Card */}
            <Card style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "15px",
                  }}
                >
                  <div>
                    {/* 🔥 MODIFIED: Dynamic status tag */}
                    <Tag
                      color={job.status === "open" ? "green" : "blue"}
                      style={{ marginBottom: "10px" }}
                    >
                      {job.status.replace("_", " ").toUpperCase()}
                    </Tag>
                    {/* 🔥 MODIFIED: Dynamic title */}
                    <h1 style={{ marginTop: "10px", marginBottom: "5px" }}>
                      {job.title}
                    </h1>
                    <p style={{ color: "#666", fontSize: "14px" }}>
                      {job.category.charAt(0).toUpperCase() +
                        job.category.slice(1)}{" "}
                      • Posted {job.details.postedDate}
                    </p>
                  </div>
                </div>

                {/* 🔥 MODIFIED: Key metrics */}
                <Row gutter={16}>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                      }}
                    >
                      <p style={{ color: "#666", marginBottom: "5px" }}>
                        Budget
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#006c05",
                        }}
                      >
                        ${job.budget.min} - ${job.budget.max}
                      </p>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                      }}
                    >
                      <p style={{ color: "#666", marginBottom: "5px" }}>
                        Timeline
                      </p>
                      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {job.details.timeline}
                      </p>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                      }}
                    >
                      <p style={{ color: "#666", marginBottom: "5px" }}>
                        Bids Received
                      </p>
                      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {job.bidsCount}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>

            {/* Description Card */}
            <Card title="Project Description" style={{ marginBottom: "20px" }}>
              {/* 🔥 MODIFIED: Dynamic full description */}
              <p style={{ lineHeight: "1.8", color: "#333" }}>
                {job.details.fullDescription}
              </p>
            </Card>

            {/* Requirements Card */}
            <Card title="Requirements" style={{ marginBottom: "20px" }}>
              {/* 🔥 MODIFIED: Dynamic requirements list */}
              <ul style={{ paddingLeft: "20px" }}>
                {job.details.requirements.map((req, idx) => (
                  <li key={idx} style={{ marginBottom: "8px", color: "#333" }}>
                    {req}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Skills Card */}
            <Card title="Required Skills">
              {/* 🔥 MODIFIED: Dynamic skills tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {job.details.skills.map((skill, idx) => (
                  <Tag key={idx} color="blue">
                    {skill}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>

          {/* 🔥 MODIFIED: RIGHT COLUMN - Client info and CTA */}
          <Col xs={24} md={8}>
            {/* Client Card */}
            <Card style={{ marginBottom: "20px", textAlign: "center" }}>
              <Avatar
                size={80}
                icon={<UserOutlined />}
                style={{ marginBottom: "15px" }}
              />
              {/* 🔥 MODIFIED: Dynamic client information */}
              <h3>{job.details.clientName}</h3>
              <Rate disabled value={Math.floor(job.details.clientRating)} />
              <p style={{ color: "#666", marginTop: "8px" }}>
                {job.details.clientRating} ({job.details.clientReviews} reviews)
              </p>
              <Divider />
              <p style={{ color: "#666", fontSize: "12px" }}>
                <EnvironmentOutlined /> {job.location.address}
              </p>
            </Card>

            {/* Apply Button Card */}
            <Card>
              {/* ✅ MODIFIED: Apply Now button opens reusable modal */}
              <Button
                type="primary"
                size="large"
                block
                onClick={() => setIsModalOpen(true)}
                style={{
                  marginBottom: "10px",
                  height: "45px",
                  fontSize: "16px",
                }}
              >
                Apply Now
              </Button>
              <Button block style={{ height: "45px", fontSize: "16px" }}>
                Contact Client
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

      {/* ✅ REUSED: ApplyModal component (no duplication) */}
      <ApplyModal
        isOpen={isModalOpen}
        jobTitle={job.title}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleApplySubmit}
      />
    </div>
  );
};

export default Detail;
