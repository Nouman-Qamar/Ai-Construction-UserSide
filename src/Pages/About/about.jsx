import React from 'react';
import { Target, Eye, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import './about.css';

export default function About() {
  return (
    <div className="about-container">

      {/* SECTION 1: Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission Card */}
            <div className="mission-vision-card">
              <div className="icon-container orange-bg">
                <Target size={32} className="card-icon white-icon" />
              </div>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-description">
                  To empower teams with a single source of truth for every construction project — improving transparency, cutting delays, and enabling seamless collaboration across stakeholders.
                </p>
            </div>

            {/* Vision Card */}
            <div className="mission-vision-card">
              <div className="icon-container blue-bg">
                <Eye size={32} className="card-icon white-icon" />
              </div>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-description">
                  To be the industry-standard platform that brings predictability and trust to construction — delivering projects on time, on budget, and with clear accountability.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Statistics Banner */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">12,450</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6,230</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">75</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The BuildFlow Story */}
      <section className="story-section">
        <div className="container story-container">
          <h2 className="story-heading">The BuildFlow Story</h2>
          <div className="story-card">
            <p className="story-paragraph">
              BuildFlow began when a group of project managers, engineers, and software builders saw the same recurring problem: projects were delayed by miscommunication and fragmented tools. We set out to design a platform that places real-time information at the center of every decision.
            </p>
            <p className="story-paragraph">
              By unifying schedules, documents, budgets, and communications, BuildFlow reduces rework and gives teams the clarity they need to make faster, better decisions. Our platform is built for the field and the office — designed to scale from single-site renovations to multi-city developments.
            </p>
            <p className="story-paragraph">
              Today we partner with contractors, owners, and architects to deliver predictable outcomes. Our commitment to data integrity, responsive support, and continuous innovation drives measurable improvements in time and cost savings for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Team */}
      <section className="team-section">
        <div className="container">
          <div className="team-heading">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">Passionate professionals dedicated to your success</p>
          </div>

          <div className="team-grid">
            {/* Team Card 1 */}
            <div className="team-card">
              <div className="icon-container orange-bg">
                <Users size={32} className="card-icon white-icon" />
              </div>
              <h3 className="team-card-title">Industry Experts</h3>
              <p className="team-card-text">Seasoned project managers and site leads who guide best practices and real-world workflows.</p>
            </div>

            {/* Team Card 2 */}
            <div className="team-card">
              <div className="icon-container blue-bg">
                <TrendingUp size={32} className="card-icon white-icon" />
              </div>
              <h3 className="team-card-title">Tech Innovators</h3>
              <p className="team-card-text">Engineers and designers crafting intuitive features that streamline planning and reporting.</p>
            </div>

            {/* Team Card 3 */}
            <div className="team-card">
              <div className="icon-container orange-bg">
                <ShieldCheck size={32} className="card-icon white-icon" />
              </div>
              <h3 className="team-card-title">Support Team</h3>
              <p className="team-card-text">Customer success specialists providing onboarding, training, and rapid issue resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Join Our Growing Community</h2>
            <p className="cta-line">
              Join 12,000+ professionals who trust BuildFlow to plan, execute, and deliver projects on time.
            </p>
            <p className="cta-line">
              Get started with a demo or talk to our team about a tailored solution for your organization.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 