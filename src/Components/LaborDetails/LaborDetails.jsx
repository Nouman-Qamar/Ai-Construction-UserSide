import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Star, Users } from "lucide-react";
import "./LaborDetails.css";
import FormField from "../FormField/FormField";
import laborDetails from "./laborsData";

export default function LaborDetails({ labor, onBack }) {
  const navigate = useNavigate();
  const [showLocationForm, setShowLocationForm] = useState(false);
  const location = useLocation();
  const selectedLabor = labor || location.state?.labor;

  

  const details = laborDetails[selectedLabor?.id] || laborDetails[1];

  const handleStart = () => {
    setShowLocationForm(true);
  };

  const handleLocationSubmit = (locationData) => {
    navigate("/services", {
      state: {
        selectedLabor: selectedLabor,
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
      <button className="back-button" onClick={onBack}>
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
