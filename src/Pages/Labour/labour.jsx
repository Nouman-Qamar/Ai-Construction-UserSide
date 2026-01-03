import React, { useState } from "react";
import LaborSearch from "../../Components/LaborSearch/LaborSearch";
import LaborDetails from "../../Components/LaborDetails/LaborDetails";
import "./labour.css";

export default function LabourPage() {
  const [selectedLabor, setSelectedLabor] = useState(null);

  const handleSelectLabor = (labor) => {
    setSelectedLabor(labor);
  };

  const handleBack = () => {
    setSelectedLabor(null);
  };

  return (
    <div className="labour-page-container">
      <div className="labour-search-column">
        <LaborSearch onSelectLabor={handleSelectLabor} />
      </div>

      <div className="labour-details-column">
        <LaborDetails labor={selectedLabor} onBack={handleBack} />
      </div>
    </div>
  );
}
