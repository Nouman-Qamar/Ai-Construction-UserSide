╔══════════════════════════════════════════════════════════════════════════════╗
║ DETAILED CODE CHANGES - ALL FILES ║
╚══════════════════════════════════════════════════════════════════════════════╝

═══════════════════════════════════════════════════════════════════════════════
FILE 1: src/Pages/Project/jobsData.js (NEW FILE - CREATED)
═══════════════════════════════════════════════════════════════════════════════

PURPOSE: Central data source for all jobs
STATUS: ✅ NEW FILE - No previous version

STRUCTURE:
• jobsData array with 2 jobs
• getJobById(id) function
• getAllJobs() function

KEY FEATURES:
✅ Unique ID for each job (1, 2, 3...)
✅ Basic info: title, description, category, status, location, budget, bidsCount
✅ Details section with full description, requirements, timeline, skills
✅ Client info: name, rating, reviews
✅ Easy to extend - add more jobs to array

USAGE:
import { getJobById, getAllJobs } from "./jobsData";

const job = getJobById(1); // Get job by ID
const allJobs = getAllJobs(); // Get all jobs

═══════════════════════════════════════════════════════════════════════════════
FILE 2: src/Pages/Project/House.jsx (REFACTORED)
═══════════════════════════════════════════════════════════════════════════════

BEFORE: Single-page component with hardcoded content
────────────────────────────────────────────────────
import React, { useState } from "react";
import "./jobs.css";

const House = () => {
const [showForm, setShowForm] = useState(false);
const [formData, setFormData] = useState({ name: "", email: "" });

const handleChange = (e) => { ... };
const handleSubmit = (e) => { ... };

return (
<div style={{...}}>
<h2>House Electrical Services</h2>
<p>We provide complete house electrical solutions...</p>
<button onClick={() => setShowForm(!showForm)}>Apply Now</button>
{showForm && (
<form onSubmit={handleSubmit}>
<input type="text" name="name" ... />
<input type="email" name="email" ... />
<button type="submit">Submit</button>
</form>
)}
</div>
);
};

AFTER: Reusable card component
──────────────────────────────
🔥 MODIFIED: House.jsx is now a reusable CARD COMPONENT
// This component displays house painting job information
// It accepts job data as props and renders a card with navigation to detail page

import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED
import { Card, Tag, Button } from "antd"; // ✅ ADDED
import { EnvironmentOutlined, DollarOutlined, ClockCircleOutlined } from "@ant-design/icons"; // ✅ ADDED
import "./jobs.css";

const House = ({ jobData }) => { // ✅ MODIFIED: Accept jobData prop
const navigate = useNavigate(); // ✅ ADDED: Navigation hook

// ✅ MODIFIED: Navigate to detail page with job ID
const handleViewDetails = () => {
navigate(`/projects/${jobData.id}`);
};

return (
<Card className="project-card" hoverable>
<div className="card-header">
{/_ 🔥 MODIFIED: Dynamic status tag _/}
<Tag color={jobData.status === "open" ? "green" : "blue"}>
{jobData.status.replace("\_", " ").toUpperCase()}
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

export default House;

CHANGES SUMMARY:
✅ Removed: 36 lines of state management and form logic
✅ Added: 10 lines of navigation and dynamic rendering
✅ Result: Reusable component that accepts any job data as props

═══════════════════════════════════════════════════════════════════════════════
FILE 3: src/Pages/Project/Electrical.jsx (REFACTORED)
═══════════════════════════════════════════════════════════════════════════════

CHANGES: IDENTICAL to House.jsx (see above)

BEFORE: 86 lines (hardcoded Industrial Electrical Services page)
AFTER: 50 lines (reusable card component)

Key difference in data:

- House.jsx displays House Painting data
- Electrical.jsx displays Electrical Wiring data
- Both use SAME component structure

═══════════════════════════════════════════════════════════════════════════════
FILE 4: src/Components/ApplyModal.jsx (NEW FILE - CREATED)
═══════════════════════════════════════════════════════════════════════════════

PURPOSE: Reusable modal for job applications
STATUS: ✅ NEW FILE - No previous version

COMPONENT STRUCTURE:
• Modal wrapper (from Ant Design)
• Form with 5 validated fields
• Success/error message handling
• Loading state during submission

FORM FIELDS:

1. Full Name (required, min 2 chars)
2. Email (required, valid email format)
3. Phone (required, 10+ digits)
4. Years of Experience (required, numeric)
5. Why are you the best fit? (required, min 20 chars)

PROPS:
• isOpen: boolean - Controls modal visibility
• jobTitle: string - Displays in modal title
• onClose: function - Called when user closes modal
• onSubmit: function - Called with form data when submitted

USAGE:
<ApplyModal
isOpen={isModalOpen}
jobTitle={job.title}
onClose={() => setIsModalOpen(false)}
onSubmit={handleApplySubmit}
/>

═══════════════════════════════════════════════════════════════════════════════
FILE 5: src/Pages/Project/Detail.jsx (NEW FILE - CREATED)
═══════════════════════════════════════════════════════════════════════════════

PURPOSE: Dynamic job detail page (loads based on URL :id)
STATUS: ✅ NEW FILE - No previous version

KEY FEATURES:
✅ Uses useParams() to get job ID from URL (/projects/:id)
✅ Uses getJobById(id) to fetch job data from jobsData
✅ Displays full job details dynamically
✅ Shows empty state if job not found
✅ Reuses ApplyModal (no duplication)

COMPONENT STRUCTURE:

import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "./jobsData";
import ApplyModal from "../Components/ApplyModal";

const Detail = () => {
const { id } = useParams(); // Get :id from URL
const navigate = useNavigate();
const [isModalOpen, setIsModalOpen] = useState(false);

    // Get job data dynamically
    const job = getJobById(id);  // Fetch from jobsData

    if (!job) return <Empty description="Job not found" />;

    const handleApplySubmit = async (formData) => {
      // Submit to backend here
      console.log("Application:", { jobId: job.id, ...formData });
    };

    return (
      <div className="detail-page">
        {/* Header with back button */}
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
          Go Back
        </Button>

        {/* Job Details Section */}
        <Card>
          <h1>{job.title}</h1>
          <Tag color={job.status === "open" ? "green" : "blue"}>
            {job.status.toUpperCase()}
          </Tag>
          <p>{job.details.fullDescription}</p>
        </Card>

        {/* Client Info Section */}
        <Card>
          <Avatar icon={<UserOutlined />} size={80} />
          <h3>{job.details.clientName}</h3>
          <Rate disabled value={Math.floor(job.details.clientRating)} />
        </Card>

        {/* Apply Button */}
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </Button>

        {/* Reused Modal - No Duplication */}
        <ApplyModal
          isOpen={isModalOpen}
          jobTitle={job.title}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleApplySubmit}
        />
      </div>
    );

};

SECTIONS DISPLAYED:

1. Back button & header (title, status, category, posted date)
2. Key metrics (Budget, Timeline, Bids)
3. Project description (from jobData.details.fullDescription)
4. Requirements (from jobData.details.requirements array)
5. Required skills (from jobData.details.skills array)
6. Client info (name, rating, reviews, location)
7. Apply button (opens ApplyModal)

═══════════════════════════════════════════════════════════════════════════════
FILE 6: src/App.jsx (MODIFIED)
═══════════════════════════════════════════════════════════════════════════════

BEFORE:
───────
import Projects from "./Pages/Project/job.jsx";

// 🔥 IMPORT NEEDED PAGES FOR NEW ROUTES
import House from "./Pages/Project/House.jsx"; // ✅ Added for House page
import Electrical from "./Pages/Project/Electrical.jsx"; // ✅ Added for Electrical page

function App() {
return (
<Routes>
...
{/_ 🔥 NEW ROUTES ADDED _/}
<Route path="/house" element={<House />} />
<Route path="/electrical" element={<Electrical />} />
</Routes>
);
}

AFTER:
──────
import Projects from "./Pages/Project/job.jsx";

// 🔥 MODIFIED: Import Detail page component for dynamic routing
import Detail from "./Pages/Project/Detail.jsx"; // ✅ Added for dynamic project details page

function App() {
return (
<Routes>
...
{/_ 🔥 MODIFIED: Dynamic route for job details _/}
<Route path="/projects/:id" element={<Detail />} /> {/_ ✅ Dynamic detail page route _/}
</Routes>
);
}

CHANGES:
✅ Line 23 (MODIFIED): Changed import from House/Electrical to Detail
✅ Line 48 (MODIFIED): Changed route from /house and /electrical to /projects/:id

WHY THIS CHANGE:
• Single dynamic route handles ALL job types
• Detail.jsx uses getJobById(id) to fetch correct job
• No need for separate routes per job category
• Scales easily when adding more jobs

═══════════════════════════════════════════════════════════════════════════════
FILE 7: src/Pages/Project/job.jsx (REFACTORED)
═══════════════════════════════════════════════════════════════════════════════

BEFORE:
───────
import { useState, useEffect } from "react";
import { Card, Tag, Button, Input, Select, Empty, Spin } from "antd";

/_ Dummy API _/
const getJobsFromApi = async () =>
new Promise((resolve) =>
setTimeout(() => {
resolve([
{
id: 1,
title: "House Painting",
category: "painting",
status: "open",
location: { city: "Lahore" },
budget: { min: 100, max: 200 },
bidsCount: 3,
},
{
id: 2,
title: "Electrical Wiring",
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

useEffect(() => {
loadJobs();
}, []);

const loadJobs = async () => {
setLoading(true);
const data = await getJobsFromApi();
setJobs(data);
setLoading(false);
};

const getStatusColor = (status) =>
status === "open" ? "green" : status === "in_progress" ? "blue" : "default";

// ...

return (
<div className="projects-page">
<section className="projects-hero">
{/_ ... _/}
</section>

      <section className="projects-section">
        <div className="container">
          {loading ? (
            <Spin size="large" />
          ) : (
            <div className="projects-grid">
              {filteredJobs.map((job, index) => (
                <motion.div key={job.id}>
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
                      <span><EnvironmentOutlined /> {job.location.city}</span>
                      <span><DollarOutlined /> ${job.budget.min} – ${job.budget.max}</span>
                      <span><ClockCircleOutlined /> {job.bidsCount} bids</span>
                    </div>
                    <Link to={`/projects/${job.id}`}>
                      <Button type="primary" block>View Details</Button>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>

);
}

AFTER:
──────
import { useState, useEffect } from "react";
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

const categoryOptions = [ /* ... */ ];

const filteredJobs = jobs.filter((job) => { /_ ... _/ });

// 🔥 MODIFIED: Function to render appropriate card component based on category
const renderJobCard = (job, index) => {
let CardComponent = null;

    // ✅ MODIFIED: Route to appropriate card component based on job category
    if (job.category === "painting") {
      CardComponent = House;
    } else if (job.category === "electrical") {
      CardComponent = Electrical;
    }

    // Fallback for unknown categories
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
<section className="projects-hero">
{/_ ... _/}
</section>

      <section className="projects-section">
        <div className="container">
          {loading ? (
            <Spin size="large" />
          ) : (
            <div className="projects-grid">
              {/* 🔥 MODIFIED: Render card components from job data */}
              {filteredJobs.map((job, index) => renderJobCard(job, index))}
            </div>
          )}
        </div>
      </section>

      <section className="projects-cta">
        {/* ... */}
      </section>
    </div>

);
}

CHANGES SUMMARY:
✅ Line 8-10 (ADDED): Imports for jobsData and card components
✅ Line 26-32 (MODIFIED): loadJobs() now uses getAllJobs() instead of dummy API
✅ Line 60-80 (ADDED): renderJobCard() function to select component based on category
✅ Line 113 (MODIFIED): Use renderJobCard() instead of inline Card rendering

BENEFITS:
✅ Removed dummy API function (no more fake delays)
✅ Loads real data from jobsData
✅ Uses component-based rendering
✅ Each card component receives data as props
✅ Easy to add new job categories

═══════════════════════════════════════════════════════════════════════════════

ROUTING FLOW SUMMARY:
════════════════════

1. User visits /jobs
   └─ job.jsx renders
   └─ Calls getAllJobs() from jobsData
   └─ Maps jobs to card components (House or Electrical)
   └─ Each card receives jobData prop

2. User clicks "View Details"
   └─ Card calls handleViewDetails()
   └─ Navigates to /projects/{id}
   └─ App.jsx matches /projects/:id route

3. Detail.jsx loads
   └─ useParams() gets :id from URL
   └─ getJobById(id) fetches job from jobsData
   └─ Displays job information dynamically

4. User clicks "Apply Now"
   └─ ApplyModal opens
   └─ User fills 5-field form
   └─ Submits form via onSubmit callback
   └─ Success message displayed

═══════════════════════════════════════════════════════════════════════════════
