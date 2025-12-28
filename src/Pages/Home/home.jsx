import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const hoverCard = {
  hover: {
    y: -8,
    scale: 1.03,
    transition: { type: "spring", stiffness: 300 }
  }
};

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-inner hero-split">

          <motion.div
            className="hero-content"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
        <h1 className="hero-title">
  Find Trusted <span className="highlight-text">Craftsmen</span><br /> for Any Job
</h1>


<p className="hero-sub text-transition">
  Connect with verified painters, plumbers, electricians,
  and more in your area.
</p>


            <div className="hero-ctas">
              <Link to="/post-job" className="btn primary">Get Started →</Link>
              <Link to="/signup" className="btn outline">Login</Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src="/card5.png" alt="Professional Tradesman" />
          </motion.div>

        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <motion.section
        className="locations-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="locations-inner">
          <span className="badge">Location-Based Projects</span>

          <h2 className="locations-title">
            Construction Activity Across Locations
          </h2>

          <p className="locations-sub">
            Sign up to explore active projects near you.
          </p>

          <motion.div
            className="locations-card"
            whileHover="hover"
            variants={hoverCard}
          >
            <div className="loc-icon">🔒</div>
            <h3>Unlock Project Locations</h3>
            <p className="muted small">
              Login or register to view nearby opportunities.
            </p>

            <Link to="/signup" className="btn primary">
              Sign Up to Explore Projects
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= FEATURES ================= */}
      <motion.section
        className="features-section"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="features-grid">
          {[
            { icon: "✔", title: "Verified Professionals" },
            { icon: "💰", title: "Transparent Pricing" },
            { icon: "⭐", title: "Quality Guarantee" },
            { icon: "🕘", title: "24/7 Support" }
          ].map((f, i) => (
            <motion.div
              key={i}
              className="feature-card"
              variants={fadeUp}
              whileHover="hover"
              {...hoverCard}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="hero"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="hero-inner hero-split">

          <div className="hero-content">
            <h1 className="hero-title">Looking for Jobs?</h1>
            <p className="hero-sub">
              Grow your business with <strong>Vi Maak Dat</strong>
            </p>

            <Link to="/signup" className="btn primary">
              Become A Constructor
            </Link>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img src="/card4.png" alt="Tradesman" />
          </motion.div>

        </div>
      </motion.section>

      {/* ================= STEPS SECTION ================= */}
      <section className="steps-section">
        <div className="steps-inner">

          <h2 className="steps-title">
            Get Things Done in 3 Easy Steps
          </h2>

          <p className="steps-sub">
            We make it simple for you to find the right help fast.
            Post a job, connect with professionals, and get quality work done.
          </p>

          <div className="steps-grid">

            <div className="step-card">
              <img src="/card1.png" alt="Post Job" className="step-img" />
              <h3>Post Your Job</h3>
              <p>Tell us what you need done. It takes only a few minutes.</p>
            </div>

            <div className="step-card">
              <img src="/card2.png" alt="Get Matched" className="step-img" />
              <h3>Get Matched</h3>
              <p>Receive offers from verified professionals near you.</p>
            </div>

            <div className="step-card">
              <img src="/card3.png" alt="Get It Done" className="step-img" />
              <h3>Get It Done</h3>
              <p>Choose the best tradesman and get the job done confidently.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
