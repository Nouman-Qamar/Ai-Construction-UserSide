import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import Modal from "./module"; // Import Modal component

export default function Services() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const [role, setRole] = useState(""); // To determine which role is selected

  useEffect(() => {
    setData(servicesConfig);
    setLoading(false);
  }, []);

  if (loading) return <div className="svc-wrap"><div className="svc-loading">Loading...</div></div>;
  if (!data) return <div className="svc-wrap"><div className="svc-loading">No data</div></div>;

  // Function to open the modal and set the role
  const openModal = (role) => {
    setRole(role); // Set the role (Client, Contractor, Labour)
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => setIsModalOpen(false); // Close the modal

  return (
    <div className="svc-wrap">
      {/* Header */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <p className="svc-kicker">{data.pageTitle}</p>
          <h1 className="svc-title">{data.pageSubtitle}</h1>
        </div>
      </section>

      {/* Sections */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-grid">
            {data.sections.map((s) => (
              <div key={s.id} className={`svc-card svc-card-${s.tone}`}>
                <div className="svc-pill">{s.pill}</div>
                <h2 className="svc-card-title">{s.title}</h2>

                <ul className="svc-list">
                  {s.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className="svc-card-actions">
                  <button className={`svc-btn ${s.tone === "blue" ? "svc-btn-blue" : "svc-btn-orange"}`}
                          onClick={() => navigate(s.route)}>
                    {s.ctaText} <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="svc-final">
        <div className="svc-final-inner">
          <h3>Start Your Journey Today</h3>
          <p>Choose your role and discover how BuildFlow can transform your construction experience</p>

          <div className="svc-hero-actions">
            <button className="svc-btn svc-btn-solid" onClick={() => openModal("Client")}>
              Sign Up as Client
            </button>
            <button className="svc-btn svc-btn-ghost" onClick={() => openModal("Contractor")}>
              Sign Up as Contractor
            </button>
            <button className="svc-btn svc-btn-ghost" onClick={() => openModal("Labour")}>
              Sign Up as Labour
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Sign Up as Client, Contractor, or Labour */}
      <Modal isOpen={isModalOpen} onClose={closeModal} role={role} />
     

    </div>
    

  );



}