import React, { useState } from "react";
import { Search, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./LaborSearch.css";

const laborData = [
  {
    id: 1,
    name: "Plumbing",
    icon: "🔧",
    description: "Pipe installation and repair services",
    workers: 45,
  },
  {
    id: 2,
    name: "Electrical",
    icon: "⚡",
    description: "Wiring and electrical installation",
    workers: 38,
  },
  {
    id: 3,
    name: "Carpentry",
    icon: "🪚",
    description: "Woodwork and structural carpentry",
    workers: 52,
  },
  {
    id: 4,
    name: "Masonry",
    icon: "🧱",
    description: "Brickwork and stone construction",
    workers: 41,
  },
];

export default function LaborSearch({ onSelectLabor, onBack }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLabors, setFilteredLabors] = useState(laborData);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredLabors(laborData);
    } else {
      const filtered = laborData.filter(
        (labor) =>
          labor.name.toLowerCase().includes(query) ||
          labor.description.toLowerCase().includes(query)
      );
      setFilteredLabors(filtered);
    }
  };

  const handleLaborSelect = (labor) => {
    if (onSelectLabor) {
      onSelectLabor(labor);
    } else {
      navigate(`/labour-details/${labor.id}`, { state: { selectedLabor: labor } });
    }
  };

  return (
    <div className="labor-search-container">
      {onBack && (
        <button className="labor-back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          Back
        </button>
      )}
      <div className="labor-search-header">
        <h2>Find the Right Tradesperson</h2>
        <p>Select a trade category to get started</p>
      </div>

      
      <div className="labor-search-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search trades (e.g., Plumbing, Electrical)..."
          value={searchQuery}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (filteredLabors && filteredLabors.length > 0) {
                handleLaborSelect(filteredLabors[0]);
              }
            }
          }}
          className="labor-search-input"
        />
      </div>

      
      <div className="labor-cards-grid">
        {filteredLabors.length > 0 ? (
          filteredLabors.map((labor) => (
            <div
              key={labor.id}
              className="labor-card"
              onClick={() => handleLaborSelect(labor)}
            >
              <div className="labor-card-content">
                <div className="labor-icon">{labor.icon}</div>
                <div className="labor-info">
                  <h3 className="labor-name">{labor.name}</h3>
                  <p className="labor-description">{labor.description}</p>
                  <span className="labor-workers">{labor.workers} workers available</span>
                </div>
              </div>
              <ChevronRight className="labor-arrow" size={24} />
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No trades found matching "{searchQuery}"</p>
            <p className="no-results-hint">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
}
