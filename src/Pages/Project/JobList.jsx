import React, { useState } from "react";
import { Card, Button, Tag, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./jobs.css";

const { Search } = Input;

export default function JobList() {
  const navigate = useNavigate();
  const [postcode, setPostcode] = useState("");

  const [jobs] = useState([
    {
      id: 1,
      title: "Garten Sauber Machen",
      category: "Gardening",
      price: "$20 USD",
      image:
        "https://images.unsplash.com/photo-1598514983491-8d9c83f3dc4f",
    },
    {
      id: 2,
      title: "I want Fresh Gardener",
      category: "Gardening",
      price: "$18 USD",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      id: 3,
      title: "I want Experienced Electrician",
      category: "Electrician",
      price: "$25 USD",
      image:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
    },
  ]);

  return (
    <div className="jobs-layout">
      {/* LEFT SIDE – JOB LIST */}
      <div className="jobs-left">
        <h2 className="page-title">Available Jobs</h2>

        {jobs.map((job) => (
          <Card className="job-list-card" key={job.id}>
            <img src={job.image} alt={job.title} />

            <div className="job-info">
              <h3>{job.title}</h3>
              <Tag>{job.category}</Tag>
              <p className="price">{job.price}</p>

              <div className="actions">
                <Button
                  className="btn-outline"
                  onClick={() => navigate(`/jobs/${job.id}`)}
                >
                  View Details
                </Button>
                <Button className="btn-gradient" onClick={() => navigate(`/jobs/${job.id}`)}>Apply Now</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* RIGHT SIDE – MAP PLACEHOLDER */}
      <div className="jobs-right">
        <Search
          placeholder="Enter postcode or city"
          allowClear
          size="large"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          onSearch={() => console.log("Search:", postcode)}
          className="map-search"
        />

        <div className="map-placeholder">
          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            alt="Map Placeholder"
          />
          <span>Map Integration Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
