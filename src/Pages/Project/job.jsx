import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Select, Empty, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

// 🔥 MODIFIED: Import job data and card components
import { getAllJobs } from "./jobsData"; // ✅ Import shared job data
import House from "./House"; // ✅ Import House card component
import Electrical from "./Electrical"; // ✅ Import Electrical card component
import "./jobs.css";

export default function Projects() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    loadJobs();
  }, []);

  // 🔥 MODIFIED: Load jobs from shared data source
  const loadJobs = async () => {
    setLoading(true);
    // Get jobs from jobsData instead of dummy API
    const data = getAllJobs();
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

  const filteredJobs = jobs.filter((job) => {
    const q = searchQuery.toLowerCase();
    return (
      (job.title.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q)) &&
      (categoryFilter === "all" || job.category === categoryFilter)
    );
  });

  // 🔥 MODIFIED: Function to render appropriate card component based on category
  const renderJobCard = (job, index) => {
    let CardComponent = null;

    // ✅ MODIFIED: Route to appropriate card component based on job category
    if (job.category === "painting") {
      CardComponent = House;
    } else if (job.category === "electrical") {
      CardComponent = Electrical;
    }

    // Fallback for unknown categories (not currently used)
    if (!CardComponent) {
      CardComponent = House;
    }

    return (
      <motion.div
        key={job.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }}
      >
        {/* ✅ MODIFIED: Pass job data as props to card component */}
        <CardComponent jobData={job} />
      </motion.div>
    );
  };

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

          {/* 🔥 MODIFIED: Search and filter UI */}
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
              {/* 🔥 MODIFIED: Render card components from job data */}
              {filteredJobs.map((job, index) => renderJobCard(job, index))}
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
