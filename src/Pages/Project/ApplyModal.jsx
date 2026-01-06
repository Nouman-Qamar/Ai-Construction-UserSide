// ✅ REUSABLE APPLY MODAL COMPONENT
// This modal is used across all job detail pages to handle applications
// It accepts job information and a callback function for form submission

import React, { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import "./jobs.css";

const ApplyModal = ({ isOpen, jobTitle, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // 🔥 MODIFIED: Handle form submission
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Call parent callback with form data
      if (onSubmit) {
        await onSubmit(values);
      }
      message.success("Application submitted successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      message.error("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={`Apply for: ${jobTitle}`}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={500}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* ✅ FORM FIELD: Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            { required: true, message: "Please enter your full name" },
            { min: 2, message: "Name must be at least 2 characters" },
          ]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        {/* ✅ FORM FIELD: Email */}
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="john@example.com" type="email" />
        </Form.Item>

        {/* ✅ FORM FIELD: Phone */}
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
            {
              pattern: /^\d{10,}$/,
              message: "Please enter a valid phone number",
            },
          ]}
        >
          <Input placeholder="+1 (555) 123-4567" />
        </Form.Item>

        {/* ✅ FORM FIELD: Experience */}
        <Form.Item
          label="Years of Experience"
          name="experience"
          rules={[
            {
              required: true,
              message: "Please enter your years of experience",
            },
          ]}
        >
          <Input type="number" placeholder="5" />
        </Form.Item>

        {/* ✅ FORM FIELD: Proposal Message */}
        <Form.Item
          label="Why are you the best fit?"
          name="proposal"
          rules={[
            { required: true, message: "Please tell us about yourself" },
            { min: 20, message: "Please provide at least 20 characters" },
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Tell us why you're the best choice for this job..."
          />
        </Form.Item>

        {/* ✅ SUBMIT BUTTON */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={loading}
          >
            Submit Application
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ApplyModal;
