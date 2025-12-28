import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Tag,
  Button,
  Descriptions,
  Divider,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./jobs.css";

const JOBS_DATA = [
  {
    id: "1",
    title: "Garten Sauber Machen",
    category: "Gardening",
    price: "$20 USD",
    pricingType: "Hourly",
    date: "2025-12-23",
    status: "Pending",
    description:
      "Professional garden cleaning service required. Tools will be provided. Prior experience preferred.",
    postedBy: "Hakan Dag",
    email: "Hakan-Dag@Gmx.De",
    estimatedHours: 10,
    timeFrame: "Flexible",
  },
];

export default function JobDetails() {
  const { id } = useParams();
  const job = JOBS_DATA.find((j) => j.id === id);

  if (!job) return null;

  const applyNow = () => {
    message.success("Application submitted successfully!");
  };

  return (
    <div className="job-detail-wrapper">
      <Card className="job-detail-card">
        {/* HEADER */}
        <div className="job-header">
          <div>
            <h1>{job.title}</h1>
            <div className="job-tags">
              <Tag>{job.category}</Tag>
              <Tag color="orange">{job.status}</Tag>
            </div>
          </div>

          <Button
            type="primary"
            size="small"
            className="apply-btn apply-btn-compact"
            onClick={applyNow}
          >
            Apply
          </Button>
        </div>

        <Divider />

        {/* INFO GRID */}
        <Descriptions column={2} className="job-info">
          <Descriptions.Item label="Price">{job.price}</Descriptions.Item>
          <Descriptions.Item label="Pricing Type">
            {job.pricingType}
          </Descriptions.Item>
          <Descriptions.Item label="Date">{job.date}</Descriptions.Item>
          <Descriptions.Item label="Estimated Hours">
            {job.estimatedHours}
          </Descriptions.Item>
          <Descriptions.Item label="Posted By">
            {job.postedBy}
          </Descriptions.Item>
          <Descriptions.Item label="Contact Email">
            {job.email}
          </Descriptions.Item>
          <Descriptions.Item label="Time Frame">
            {job.timeFrame}
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        {/* DESCRIPTION */}
        <div className="job-section">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>

        {/* UPLOAD */}
        <div className="job-section">
          <h3>Upload Supporting Images (Optional)</h3>
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Images</Button>
          </Upload>
        </div>
      </Card>
    </div>
  );
}
