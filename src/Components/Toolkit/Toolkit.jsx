import React, { useState } from "react";
import "./Toolkit.css";
import { CheckCircle2, Circle } from "lucide-react";

export default function Toolkit({ onStart, onPreview }) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      name: "Location",
      status: "inactive",
    },
    {
      id: 2,
      name: "Order details",
      status: "active",
    },
    {
      id: 3,
      name: "Your preferred time frame",
      status: "inactive",
    },
  ];

  const handleStart = () => {
    if (onStart) {
      onStart();
    }
  };

  return (
    <div className="toolkit-container">
      <div className="toolkit-content">
        <section className="toolkit-section">
          <h2 className="toolkit-heading">Toolkit</h2>
          <h3 className="toolkit-subheading">Tell us about your assignment</h3>
          <p className="toolkit-description">
            To find the right tradesperson for you, we ask you a few questions:
          </p>

          {/* Progress Checklist */}
          <div className="progress-checklist">
            {steps.map((step, index) => (
              <div key={step.id} className="checklist-item">
                <div
                  className={`checklist-icon ${step.status}`}
                >
                  {step.id < 2 ? (
                    <Circle size={24} />
                  ) : step.id === 2 ? (
                    <CheckCircle2 size={24} />
                  ) : (
                    <Circle size={24} />
                  )}
                </div>
                <span className={`checklist-label ${step.status}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>

          {/* Start Button */}
          <div className="toolkit-button-container">
            <button className="toolkit-start-btn" onClick={handleStart}>
              Start
            </button>
            <button
              type="button"
              className="toolkit-preview-btn"
              onClick={() => onPreview && onPreview()}
              style={{
                marginLeft: 12,
                padding: "12px 18px",
                background: "transparent",
                border: "2px solid #ffd9bf",
                borderRadius: 10,
                color: "#ff7a18",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Preview a trade
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
