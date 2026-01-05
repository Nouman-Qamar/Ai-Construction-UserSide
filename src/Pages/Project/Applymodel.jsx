import { useEffect } from "react";

// 🔧 Component same hi rakha: ApplyModel
const ApplyModel = ({ closeModal }) => {
  // ✅ ESC key se modal close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  // ✅ Send Application handler
  const handleSubmit = () => {
    alert("✅ Application sent successfully!");
    closeModal();
  };

  return (
    // ✅ Overlay click se modal close
    <div style={overlayStyle} onClick={closeModal}>
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()} // ❌ modal ke andar click se close na ho
      >
        <h2>Apply for Job</h2>

        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="text" placeholder="Phone Number" style={inputStyle} />

        <textarea
          placeholder="Why should we hire you?"
          rows="4"
          style={inputStyle}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="projects-cta" onClick={handleSubmit}>
            Send Application
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Export same
export default ApplyModel;

/* ================= STYLES ================= */

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "8px",
  width: "350px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};
