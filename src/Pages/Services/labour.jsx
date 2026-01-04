import { motion } from "framer-motion";
import "./Labour.css";

export default function Labour() {
  return (
    <motion.div
      className="labour-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="labour-hero">
        <h1>Labour Services</h1>
        <p>Get daily construction work near your location</p>
      </section>

      {/* Features */}
      <section className="labour-features">
        <div className="feature-card">
          <h3>Nearby Jobs</h3>
          <p>Find work close to your area</p>
        </div>

        <div className="feature-card">
          <h3>Quick Hiring</h3>
          <p>Get hired without long process</p>
        </div>

        <div className="feature-card">
          <h3>Fast Payments</h3>
          <p>Receive payments quickly and securely</p>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="labour-cta"
        whileHover={{ scale: 1.03 }}
      >
        <h2>Start Working Today</h2>
        <button className="labour-btn">Find Work</button>
      </motion.section>
    </motion.div>
  );
}
