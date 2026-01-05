import { useNavigate } from "react-router-dom";

const House = ({ job }) => {
  const navigate = useNavigate();

  if (!job) {
    return null;
  }

  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.description || job.shortDesc}</p>
      <button
        onClick={() => navigate(`/projects/${job.id}`)}
        style={{
          padding: "8px 12px",
          cursor: "pointer",
          background: "linear-gradient(90deg,#f7971e,#2c3eaa)",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default House;
