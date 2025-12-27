import React from "react";
import "./home.css";

import { Link } from "react-router-dom";
import {
	FaFileAlt,
	FaSearch,
	FaChartLine,
	FaDollarSign,
	FaCheckCircle,
	FaUsers,
	FaShieldAlt
} from "react-icons/fa";


function Home() {
	return (
		<div className="home-page">
			<section className="hero">
				<div className="hero-inner">
					<div className="hero-content">
						<div className="trust">Trusted by <strong>10,000+</strong> Construction Professionals</div>
						<h1 className="hero-title" style={{ fontSize: "3rem", fontWeight: "800", lineHeight: "1.2", color: "#0f172a", letterSpacing: "-0.5px", marginBottom: "1rem" }}>Smart Construction <span style={{ background: "linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "900" }}>Management</span> Made Easy</h1>

						<p className="hero-sub">Plan, assign, and track projects with an intuitive dashboard built for contractors and clients.</p>
						<div className="hero-ctas">
							<Link to="/signup" className="btn primary">Get Started</Link>
							<Link to="/login" className="btn ghost">Login</Link>
						</div>
						<ul className="hero-features">
							<li><FaCheckCircle className="icon" /> Post projects & hire contractors</li>
							<li><FaUsers className="icon" /> Collaborate with teams & stakeholders</li>
							<li><FaShieldAlt className="icon" /> Secure payments & data</li>
						</ul>
					</div>
					<div className="hero-media">
						<div className="media-card">
							<div className="media-badge">100% Secure</div>
							{/* <div className="media-image" aria-hidden>
								<img src={construction} alt="Construction illustration" />
							</div> */}
						</div>
					</div>
				</div>   
			</section>

			<section className="locations-section">
				<div className="locations-inner">
					<span className="badge">Location-Based Projects</span>
					<h2>Construction Activity Across Locations</h2>
					<p className="muted">Sign up to explore active construction projects and job opportunities near you.</p>

					<div className="locations-card-outer">
						<div className="locations-card-bg" />
						<div className="locations-card" style={{ padding: "2rem", margin: "1rem 0" }}>
							<div className="loc-icon">🔒</div>
							<h3>Unlock Project Locations</h3>
							<p className="muted small">Login or register to view project details, locations, and connect with construction opportunities in your area.</p>
							<Link to="/signup" className="btn primary">Sign Up to Explore Projects</Link>
							<p className="tiny muted">Free to join • No credit card required</p>
						</div>
					</div>
				</div>
			</section>

			<section className="features-section">
				<div className="feature-hero">
					<h2 style={{fontSize:"2rem",fontWeight:"700",margin:"1.5rem 0",letterSpacing:"-0.5px",lineHeight:"1.3",background:"linear-gradient(90deg,#2563eb,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Everything You Need to Manage Construction Projects</h2>

				</div>

				<div className="features-grid">
					<div className="feature">
						<div className="feature-icon"><FaFileAlt /></div>
						<h3>Post Projects</h3>
						<p>Clients can easily post construction projects with detailed requirements and timelines.</p>
					</div>
					<div className="feature">
						<div className="feature-icon"><FaSearch /></div>
						<h3>Find Work</h3>
						<p>Contractors and labour can browse and apply for relevant construction opportunities.</p>
					</div>
					<div className="feature">
						<div className="feature-icon"><FaChartLine /></div>
						<h3>Track Progress</h3>
						<p>Monitor project milestones, timelines, and deliverables in real-time with ease.</p>
					</div>
					<div className="feature">
						<div className="feature-icon"><FaDollarSign /></div>
						<h3>Secure Payments</h3>
						<p>Transparent and secure payment processing ensures trust between all parties.</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
