import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-inner new-hero">
          <div className="hero-content">

            <h1 className="hero-title">
              Find Trusted Craftsmen <br /> for Any Job
            </h1>

            <p className="hero-sub">
              Connect with verified painters, plumbers, electricians,
              and more in your area. Quality work, reliable service,
              competitive pricing.
            </p>

            <div className="hero-ctas">
              <Link to="/post-job" className="btn primary">
                Get Started →
              </Link>
              <Link to="/signup" className="btn outline">
                Login
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LOCATIONS SECTION ================= */}
      <section className="locations-section">
        <div className="locations-inner">

          <span className="badge">Location-Based Projects</span>

          <h2 className="locations-title">
            Construction Activity Across Locations
          </h2>

          <p className="locations-sub">
            Sign up to explore active construction projects and job
            opportunities near you.
          </p>

          <div className="locations-card-wrapper">
            <div className="locations-card">
              <div className="loc-icon">🔒</div>

              <h3>Unlock Project Locations</h3>

              <p className="muted small">
                Login or register to view project details, locations,
                and connect with construction opportunities in your area.
              </p>

              <Link to="/signup" className="btn primary">
                Sign Up to Explore Projects
              </Link>

              <p className="tiny muted">
                Free to join • No credit card required
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="features-section">
        <div className="features-inner">
          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">✔</div>
              <h3>Verified Professionals</h3>
              <p>All craftsmen are background-checked and verified for your safety.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Transparent Pricing</h3>
              <p>Get multiple quotes and compare prices before you commit.</p>
            </div>

            <div className="feature-card active">
              <div className="feature-icon">⭐</div>
              <h3>Quality Guarantee</h3>
              <p>Work is backed by our satisfaction guarantee policy.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🕘</div>
              <h3>24/7 Support</h3>
              <p>Our customer service team is always ready to help you.</p>
            </div>

          </div>
        </div>
      </section>
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
        <img src="/card1.png.png" alt="Post Job" className="step-img" />
        <h3>Post Your Job</h3>
        <p>Tell us what you need done. It takes only a few minutes.</p>
      </div>

      <div className="step-card">
        <img src="/card2.png.png" alt="Get Matched" className="step-img" />
        <h3>Get Matched</h3>
        <p>Receive offers from verified professionals near you.</p>
      </div>

      <div className="step-card">
        <img src="/card3.png.png" alt="Get It Done" className="step-img" />
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
