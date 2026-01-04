import { motion } from "framer-motion";
import "./Client.css";

export default function Client() {
  return (
    <motion.div
      className="client-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="client-hero">
        <h1>Client Services</h1>
        <p>Hire trusted contractors for your construction projects</p>
      </section>

      {/* Features */}
      <section className="client-features">
        <div className="feature-card">
          <h3>Verified Contractors</h3>
          <p>Hire skilled and background-checked professionals</p>
        </div>

        <div className="feature-card">
          <h3>Transparent Pricing</h3>
          <p>No hidden charges, clear project cost</p>
        </div>

        <div className="feature-card">
          <h3>Project Tracking</h3>
          <p>Monitor progress from start to finish</p>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="client-cta"
        whileHover={{ scale: 1.03 }}
      >
        <h2>Post Your Project Today</h2>
        <button className="client-btn">Hire Now</button>
      </motion.section>
    </motion.div>
  );
}
