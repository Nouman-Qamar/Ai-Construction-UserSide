import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cardpage.css";
import ProjectsTable from "./ProjectsTable";
import AlertsList from "./AlertsList";

export default function Card() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setProjects([
      { id: 1, name: "Downtown Office Tower", type: "Commercial", due: "Mar 15, 2026", contractors: 8, workers: 45, budget: "$4.2M", progress: 68, status: "On Track", statusColor: "green" },
      { id: 2, name: "Riverside Bridge Project", type: "Infrastructure", due: "Jun 30, 2026", contractors: 12, workers: 78, budget: "$8.7M", progress: 42, status: "At Risk", statusColor: "yellow" },
      { id: 3, name: "Residential Complex Phase 2", type: "Residential", due: "Dec 20, 2026", contractors: 5, workers: 32, budget: "$6.1M", progress: 12, status: "Planning", statusColor: "blue" },
    ]);

    setAlerts([
      { id: 1, title: "Safety Inspection Required", message: "Downtown Office Tower requires immediate safety inspection before continuing work.", level: "high" },
      { id: 2, title: "Material Delivery Delayed", message: "Steel shipment for Riverside Bridge delayed by 3 days.", level: "medium" },
    ]);
  };

  const handleOverview = () => {
    navigate("/projects");
  };

  return (
    <div className="card-wrapper">
      <ProjectsTable
        projects={projects}
        onOverviewClick={handleOverview}
      />
      <AlertsList alerts={alerts} />
    </div>
  );
}
