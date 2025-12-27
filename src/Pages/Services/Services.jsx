import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Services.css";
import Modal from "./module";

const servicesConfig = {
  pageTitle: "Our Services",
  pageSubtitle: "Choose the path that fits you best",
  sections: [
    {
      id: 1,
      tone: "blue",
      pill: "For Clients",
      title: "Hire Trusted Contractors",
      bullets: ["Verified professionals", "Transparent pricing", "Project tracking"],
      ctaText: "Explore Clients",
      route: "/clients"
    },
    {
      id: 2,
      tone: "orange",
      pill: "For Contractors",
      title: "Find New Projects",
      bullets: ["Daily new leads", "Direct clients", "Secure payments"],
      ctaText: "Explore Contractors",
      route: "/contractors"
    },
    {
      id: 3,
      tone: "blue",
      pill: "For Labour",
      title: "Get Daily Work",
      bullets: ["Nearby jobs", "Quick hiring", "Fast payments"],
      ctaText: "Explore Labour",
      route: "/labour"
    }
  ]
};

export default function Services() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState("");

  const openModal = (role) => {
    setRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      className="svc-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero */}
      <motion.section
        className="svc-hero"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="svc-hero-inner">
          <p className="svc-kicker">{servicesConfig.pageTitle}</p>
          <h1 className="svc-title">{servicesConfig.pageSubtitle}</h1>
        </div>
      </motion.section>

      {/* Cards */}
      <section className="svc-section">
        <div className="svc-container">
          <motion.div
            className="svc-grid"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {servicesConfig.sections.map((s) => (
              <motion.div
                key={s.id}
                className={`svc-card svc-card-${s.tone}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="svc-pill">{s.pill}</div>
                <h2 className="svc-card-title">{s.title}</h2>

                <ul className="svc-list">
                  {s.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className="svc-card-actions">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`svc-btn ${s.tone === "blue" ? "svc-btn-blue" : "svc-btn-orange"}`}
                    onClick={() => navigate(s.route)}
                  >
                    {s.ctaText} →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.section
        className="svc-final"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="svc-final-inner">
          <h3>Start Your Journey Today</h3>
          <p>Choose your role and discover how BuildFlow can transform your construction experience</p>

          <div className="svc-hero-actions">
            {["Client", "Contractor", "Labour"].map((r) => (
              <motion.button
                key={r}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`svc-btn ${r === "Client" ? "svc-btn-solid" : "svc-btn-ghost"}`}
                onClick={() => openModal(r)}
              >
                Sign Up as {r}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      <Modal isOpen={isModalOpen} onClose={closeModal} role={role} />
    </motion.div>
  );
}
