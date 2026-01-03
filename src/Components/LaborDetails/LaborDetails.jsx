import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, Star, Users } from "lucide-react";
import "./LaborDetails.css";
import FormField from "../FormField/FormField";

export default function LaborDetails({ labor, onBack }) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [showLocationForm, setShowLocationForm] = useState(false);

  const laborDetails = {
    1: {
      name: "Plumbing",
      icon: "🔧",
      description: "Professional plumbing services for residential and commercial projects",
      rating: 4.8,
      reviews: 234,
      workers: 45,
      avgCost: "$50-150 per hour",
      experience: "10+ years avg experience",
      details: [
        "Pipe installation",
        "Leak detection and repair",
        "Water heater services",
        "Drain cleaning",
        "Faucet installation",
      ],
    },
    2: {
      name: "Electrical",
      icon: "⚡",
      description: "Expert electrical installation and maintenance services",
      rating: 4.9,
      reviews: 189,
      workers: 38,
      avgCost: "$60-200 per hour",
      experience: "12+ years avg experience",
      details: [
        "Wiring installation",
        "Circuit breaker replacement",
        "Outlet installation",
        "Panel upgrades",
        "Troubleshooting",
      ],
    },
    3: {
      name: "Carpentry",
      icon: "🪚",
      description: "Quality carpentry work for structural and decorative projects",
      rating: 4.7,
      reviews: 267,
      workers: 52,
      avgCost: "$45-180 per hour",
      experience: "15+ years avg experience",
      details: [
        "Frame construction",
        "Cabinet building",
        "Door installation",
        "Deck building",
        "Finish work",
      ],
    },
    4: {
      name: "Masonry",
      icon: "🧱",
      description: "Professional masonry and stonework services",
      rating: 4.6,
      reviews: 156,
      workers: 41,
      avgCost: "$40-120 per hour",
      experience: "8+ years avg experience",
      details: [
        "Brick laying",
        "Stone work",
        "Concrete placement",
        "Wall construction",
        "Repairs",
      ],
    },
  };

  const selectedLabor = labor || location.state?.selectedLabor;
  const laborId = selectedLabor?.id || Number(params.id) || 1;
  const details = laborDetails[laborId] || laborDetails[1];

  const handleStart = () => {
    setShowLocationForm(true);
  };

  const handleLocationSubmit = (locationData) => {
    navigate("/services", {
      state: {
        selectedLabor: labor,
        location: locationData,
      },
    });
  };

  if (showLocationForm) {
    return (
      <FormField
        title="Select Your Location"
        subtitle="Where will the work be done?"
        fields={[
          {
            name: "address",
            type: "text",
            label: "Street Address",
            placeholder: "Enter street address",
          },
          {
            name: "city",
            type: "text",
            label: "City",
            placeholder: "Enter city",
          },
          {
            name: "state",
            type: "text",
            label: "State",
            placeholder: "Enter state",
          },
          {
            name: "zipcode",
            type: "text",
            label: "ZIP Code",
            placeholder: "Enter ZIP code",
          },
        ]}
        onSubmit={handleLocationSubmit}
        onBack={() => setShowLocationForm(false)}
      />
    );
  }

  return (
    <div className="labor-details-container">
      {/* Back Button */}
      <button className="back-button" onClick={onBack || (() => navigate(-1))}>
        <ArrowLeft size={20} />
        Back
      </button>

      {/* Labor Header */}
      <div className="labor-details-header">
        <div className="labor-header-left">
          <div className="labor-large-icon">{details.icon}</div>
          <div className="labor-header-info">
            <h1 className="labor-detail-name">{details.name}</h1>
            <p className="labor-detail-description">{details.description}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="labor-rating">
          <div className="rating-stars">
            <Star size={20} className="star-filled" />
            <span className="rating-value">{details.rating}</span>
          </div>
          <p className="rating-reviews">({details.reviews} reviews)</p>
        </div>
      </div>

      {/* Key Stats */}
      <div className="labor-stats">
        <div className="stat-card">
          <Users size={24} />
          <div>
            <p className="stat-label">Available Workers</p>
            <p className="stat-value">{details.workers}</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">💰</span>
          <div>
            <p className="stat-label">Average Cost</p>
            <p className="stat-value">{details.avgCost}</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">📅</span>
          <div>
            <p className="stat-label">Experience</p>
            <p className="stat-value">{details.experience}</p>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="labor-services">
        <h3 className="services-title">Services Offered</h3>
        <ul className="services-list">
          {details.details.map((detail, index) => (
            <li key={index} className="service-item">
              <span className="service-check">✓</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Start Button */}
      <div className="labor-action">
        <button className="labor-start-btn" onClick={handleStart}>
          Continue
        </button>
      </div>
    </div>
  );
}
