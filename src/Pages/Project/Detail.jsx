import { useState } from "react";
import { useParams } from "react-router-dom";
// 🔧 CHANGED: Fixed import name from ApplyModal to ApplyModel
import ApplyModel from "./Applymodel";

const Detail = () => {
  // 🔧 CHANGED: Removed duplicate nested Detail component
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      {/* Heading */}
      <h1>House Painting</h1>

      {/* Detail */}
      <p style={{ color: "#555", lineHeight: "1.6" }}>
        Complete interior and exterior house painting service. We provide
        professional painters, high quality material, and timely completion of
        work.
      </p>

      {/* Extra Info */}
      <ul>
        <li>📍 Location: Lahore</li>
        <li>💰 Budget: $100 – $200</li>
        <li>📌 Category: Painting</li>
      </ul>

      {/* Apply Button */}
      <button
        onClick={() => setOpenModal(true)}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "linear-gradient(90deg,#f7971e,#2c3eaa)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Apply Now
      </button>

      {/* Popup Form */}
      {openModal && <ApplyModel closeModal={() => setOpenModal(false)} />}
    </div>
  );
};

export default Detail;
