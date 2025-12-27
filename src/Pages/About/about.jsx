import React from 'react'
import {
  Target,
  Eye,
  Users,
  TrendingUp,
  ShieldCheck,
  Hammer,
  Briefcase,
  UserCheck
} from 'lucide-react'
import './about.css'

export default function About() {
  return (
    <div className="about-container">

      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="icon-container orange-bg">
                <Target size={32} className="white-icon" />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To connect clients, contractors, and skilled labor on one transparent platform where projects are posted, bids are placed, and work is delivered with confidence.
              </p>
            </div>

            <div className="mission-vision-card">
              <div className="icon-container blue-bg">
                <Eye size={32} className="white-icon" />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To become the most trusted construction bidding ecosystem — empowering fair competition, skilled hiring, and on-time project delivery worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">18K+</div>
              <div className="stat-label">Verified Professionals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9,400</div>
              <div className="stat-label">Projects Posted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6,100</div>
              <div className="stat-label">Successful Bids</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Trust Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="roles-section">
        <div className="container">
          <div className="team-heading">
            <h2 className="section-title">Built for Every Role</h2>
            <p className="section-subtitle">One platform. Three powerful experiences.</p>
          </div>

          <div className="team-grid">
            <div className="team-card role-client">
              <div className="icon-container blue-bg">
                <Briefcase size={32} className="white-icon" />
              </div>
              <h3 className="team-card-title">Clients</h3>
              <p className="team-card-text">
                Post projects, receive competitive bids, compare contractors, track progress, and ensure transparent delivery — all from one dashboard.
              </p>
            </div>

            <div className="team-card role-contractor">
              <div className="icon-container orange-bg">
                <Hammer size={32} className="white-icon" />
              </div>
              <h3 className="team-card-title">Contractors</h3>
              <p className="team-card-text">
                Discover active projects, place bids, manage teams, assign labor, and deliver work efficiently with real-time updates.
              </p>
            </div>

            <div className="team-card role-labour">
              <div className="icon-container purple-bg">
                <UserCheck size={32} className="white-icon" />
              </div>
              <h3 className="team-card-title">Labour</h3>
              <p className="team-card-text">
                Find verified work opportunities, get hired by contractors, track assigned tasks, and build your professional reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-container">
          <h2 className="story-heading">How BuildFlow Works</h2>
          <div className="story-card">
            <p className="story-paragraph">
              Clients post detailed project requirements. Contractors submit competitive bids based on scope, timeline, and budget. Once awarded, contractors assign skilled labor and manage execution seamlessly.
            </p>
            <p className="story-paragraph">
              Every stage — bidding, hiring, scheduling, and reporting — is centralized to eliminate confusion and ensure accountability across all stakeholders.
            </p>
            <p className="story-paragraph">
              BuildFlow isn’t just software — it’s a complete construction marketplace designed for speed, trust, and scalability.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="team-heading">
            <h2 className="section-title">Why BuildFlow</h2>
            <p className="section-subtitle">Designed for modern construction workflows</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="icon-container orange-bg">
                <Users size={32} className="white-icon" />
              </div>
              <h3 className="team-card-title">Verified Network</h3>
              <p className="team-card-text">
                Trusted clients, contractors, and labor profiles to ensure quality and reliability.
              </p>
            </div>

            <div className="team-card">
              <div className="icon-container blue-bg">
                <TrendingUp size={32} className="white-icon" />
              </div>
              <h3 className="team-card-title">Smart Bidding</h3>
              <p className="team-card-text">
                Transparent bidding tools that promote fair pricing and informed decisions.
              </p>
            </div>

            <div className="team-card">
              <div className="icon-container orange-bg">
                <ShieldCheck size={32} className="white-icon" />
              </div>
              <h3 className="team-card-title">Secure & Scalable</h3>
              <p className="team-card-text">
                Enterprise-grade security with workflows that scale from small jobs to mega projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Start Bidding. Start Building.</h2>
            <p className="cta-line">
              Whether you’re posting a project, bidding work, or looking for jobs — BuildFlow is built for you.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">Post a Project</button>
              <button className="btn-secondary">Explore Opportunities</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
