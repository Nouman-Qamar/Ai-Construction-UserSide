import { motion } from "framer-motion";
import "./Contractor.css";

export default function Contractor() {
  return (
    <motion.div
      className="contractor-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contractor-hero">
        <h1>Contractor Services</h1>
        <p>Find new projects and grow your construction business</p>
      </section>

      {/* Features */}
      <section className="contractor-features">
        <div className="feature-card">
          <h3>Daily New Projects</h3>
          <p>Get fresh leads from verified clients every day</p>
        </div>

        <div className="feature-card">
          <h3>Direct Clients</h3>
          <p>No middleman — talk directly to clients</p>
        </div>

        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>Payments released safely after work completion</p>
        </div>
      </section>

      {/* Call To Action */}
      <motion.section
        className="contractor-cta"
        whileHover={{ scale: 1.03 }}
      >
        <h2>Start Getting Projects Today</h2>
        <button className="contractor-btn">
          Join as Contractor
        </button>
      </motion.section>
    </motion.div>
  );
}
