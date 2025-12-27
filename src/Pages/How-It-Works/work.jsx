import { Card } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  AimOutlined,
  FileTextOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./buildflow.css";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description:
        "Create your free account in minutes. Quick and simple registration process with no hidden fees.",
      icon: UserOutlined,
      details: "Secure & easy signup",
      color: "#ff7a18",
    },
    {
      number: 2,
      title: "Choose Your Role",
      description:
        "Select whether you're a Client, Contractor, or Labour member joining our platform.",
      icon: AimOutlined, // ✅ FIXED (TargetOutlined ❌)
      details: "Define your position",
      color: "#2563eb",
    },
    {
      number: 3,
      title: "Post or Apply",
      description:
        "Clients post projects. Contractors and Labour browse and apply for jobs that match their skills.",
      icon: FileTextOutlined,
      details: "Find perfect matches",
      color: "#10b981",
    },
    {
      number: 4,
      title: "Track & Get Paid",
      description:
        "Monitor progress in real-time. Secure payment processing ensures everyone gets paid on time.",
      icon: DollarOutlined,
      details: "Safe & timely payments",
      color: "#8b5cf6",
    },
  ];

  const roles = [
    {
      title: "For Client",
      color: "#ff7a18",
      icon: "👷",
      features: [
        "Post your construction project",
        "Review contractor proposals",
        "Select the best fit",
        "Track project progress",
        "Release payments securely",
      ],
    },
    {
      title: "For Contractor",
      color: "#2563eb",
      icon: "🔨",
      features: [
        "Browse available projects",
        "Submit competitive bids",
        "Get hired by clients",
        "Manage project delivery",
        "Receive secure payments",
      ],
    },
    {
      title: "For Labour",
      color: "#10b981",
      icon: "🛠️",
      features: [
        "Search job opportunities",
        "Apply with your profile",
        "Connect with contractors",
        "Complete assigned work",
        "Get paid promptly",
      ],
    },
  ];

  return (
    <main className="how-it-works-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">How BuildFlow Works</h1>
          <p className="hero-subtitle">
            Get started in 4 simple steps and transform the way you manage
            construction projects
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="steps-header">
          <h2 className="steps-title">Our Simple 4-Step Process</h2>
          <p className="steps-subtitle">Easy workflow from signup to payment</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="step-wrapper">
                {index < steps.length - 1 && (
                  <div
                    className="connecting-line"
                    style={{ backgroundColor: step.color }}
                  />
                )}

                <Card
                  className="step-card"
                  style={{ borderTopColor: step.color }}
                >
                  <div className="step-number-wrapper">
                    <div
                      className="step-number"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    <div className="step-tag">Step {step.number}</div>
                  </div>

                  <div
                    className="step-icon-container"
                    style={{ color: step.color }}
                  >
                    <IconComponent />
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  <div
                    className="step-highlight"
                    style={{
                      backgroundColor: `${step.color}15`,
                      borderLeftColor: step.color,
                    }}
                  >
                    <span
                      className="highlight-icon"
                      style={{ color: step.color }}
                    >
                      ►
                    </span>
                    <span className="highlight-text">{step.details}</span>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Roles Section */}
      <section className="roles-section">
        <div className="roles-header">
          <h2 className="roles-title">Tailored Experience for Every Role</h2>
          <p className="roles-subtitle">
            Each user type gets a customized workflow designed for their unique
            needs
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="roles-grid">
          {roles.map((role) => (
            <Card
              key={role.title}
              className="role-card"
              style={{ borderTopColor: role.color }}
            >
              <div className="role-header">
                <div className="role-icon-large">{role.icon}</div>
                <h3 className="role-title" style={{ color: role.color }}>
                  {role.title}
                </h3>
              </div>

              <div className="role-features">
                {role.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-check-wrapper">
                      <CheckCircleOutlined
                        style={{ color: role.color, fontSize: 18 }}
                      />
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-icon">🚀</div>
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Join thousands of construction professionals using BuildFlow
          </p>
          <Link to="/signup" className="cta-button">
            Start Your Free Account Today
          </Link>
        </div>
      </section>
    </main>
  );
}
