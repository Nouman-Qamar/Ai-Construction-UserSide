import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Tag, Button, Input, Select, Empty, Spin } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "./jobs.css";

/* Dummy API */
const getJobsFromApi = async () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "House Painting",
          description: "Complete interior and exterior house painting service.",
          category: "painting",
          status: "open",
          location: { city: "Lahore" },
          budget: { min: 100, max: 200 },
          bidsCount: 3,
        },
        {
          id: 2,
          title: "Electrical Wiring",
          description: "Install new electrical wiring for a residential house.",
          category: "electrical",
          status: "in_progress",
          location: { city: "Karachi" },
          budget: { min: 80, max: 150 },
          bidsCount: 5,
        },
      ]);
    }, 800)
  );

export default function Projects() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setLoading(true);
    const data = await getJobsFromApi();
    setJobs(data);
    setLoading(false);
  };

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "plumbing", label: "Plumbing" },
    { value: "electrical", label: "Electrical" },
    { value: "painting", label: "Painting" },
    { value: "carpentry", label: "Carpentry" },
    { value: "masonry", label: "Masonry" },
    { value: "roofing", label: "Roofing" },
  ];

  const getStatusColor = (status) =>
    status === "open" ? "green" : status === "in_progress" ? "blue" : "default";

  const filteredJobs = jobs.filter((job) => {
    const q = searchQuery.toLowerCase();
    return (
      (job.title.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q)) &&
      (categoryFilter === "all" || job.category === categoryFilter)
    );
  });

  return (
    <div className="projects-page">
      {/* ===== HEADER ===== */}
      <section className="projects-hero">
        <div className="container">
          <span className="badge">Browse Projects</span>
          <h1>Find Your Next Project</h1>
          <p>
            Explore active construction projects and start working with verified
            clients today.
          </p>

          <div className="filters">
            <Input
              size="large"
              prefix={<SearchOutlined />}
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select
              size="large"
              value={categoryFilter}
              onChange={setCategoryFilter}
              options={categoryOptions}
            />
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="projects-section">
        <div className="container">
          {loading ? (
            <div className="center">
              <Spin size="large" />
            </div>
          ) : filteredJobs.length === 0 ? (
            <Empty description="No projects found">
              <Button type="primary" onClick={() => setSearchQuery("")}>
                Clear Filters
              </Button>
            </Empty>
          ) : (
            <div className="projects-grid">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="project-card" hoverable>
                    <div className="card-header">
                      <Tag color={getStatusColor(job.status)}>
                        {job.status.replace("_", " ").toUpperCase()}
                      </Tag>
                      <span className="category">{job.category}</span>
                    </div>

                    <h3>{job.title}</h3>
                    <p className="desc">{job.description}</p>

                    <div className="meta">
                      <span>
                        <EnvironmentOutlined /> {job.location.city}
                      </span>
                      <span>
                        <DollarOutlined /> ${job.budget.min} – ${job.budget.max}
                      </span>
                      <span>
                        <ClockCircleOutlined /> {job.bidsCount} bids
                      </span>
                    </div>

                    <Link to={`/projects/${job.id}`}>
                      <Button type="primary" block>
                        View Details
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="projects-cta">
        <div className="container">
          <h2>Have a Project to Post?</h2>
          <p>
            Post your project and receive bids from verified professionals
            within minutes.
          </p>
          <Link to="/post-job" className="cta-btn-wrap">
            <Button className="post-project-btn">Post a Project</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
