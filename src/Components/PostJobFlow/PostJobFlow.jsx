import React, { useState } from "react";

import Footer from "../Footer/Footer";
import Toolkit from "../Toolkit/Toolkit";
import LaborSearch from "../LaborSearch/LaborSearch";
import LaborDetails from "../LaborDetails/LaborDetails";
import "./PostJobFlow.css";

export default function PostJobFlow() {
  const [currentStep, setCurrentStep] = useState("toolkit"); // toolkit, search, details
  const [selectedLabor, setSelectedLabor] = useState(null);

  // sample labor used for quick preview from the toolkit
  const sampleLabor = {
    id: 1,
    name: "Plumbing",
    icon: "🔧",
    description: "Professional plumbing services for residential and commercial projects",
    rating: 4.8,
    reviews: 234,
    workers: 45,
    avgCost: "$50-150 per hour",
    experience: "10+ years avg experience",
  };

  const handleStartClick = () => {
    setCurrentStep("search");
  };

  const handleSelectLabor = (labor) => {
    setSelectedLabor(labor);
    setCurrentStep("details");
  };

  const handleBackFromDetails = () => {
    setCurrentStep("search");
    setSelectedLabor(null);
  };

  const handleBackFromSearch = () => {
    setCurrentStep("toolkit");
  };

  const handlePreviewFromToolkit = (labor = sampleLabor) => {
    setSelectedLabor(labor);
    setCurrentStep("details");
  };

  return (
    <>
      <div className="post-job-flow">
        {currentStep === "toolkit" && (
          <div className="flow-step">
            <Toolkit onStart={handleStartClick} onPreview={handlePreviewFromToolkit} />
          </div>
        )}

        {currentStep === "search" && (
          <div className="flow-step">
            <LaborSearch
              onSelectLabor={handleSelectLabor}
              onBack={handleBackFromSearch}
            />
          </div>
        )}

        {currentStep === "details" && selectedLabor && (
          <div className="flow-step">
            <LaborDetails labor={selectedLabor} onBack={handleBackFromDetails} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
