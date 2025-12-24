import { useEffect, useState } from "react";
import { servicesConfig } from "./servicesData";
import "./services.css";

export default function ClientServices() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Future API:
    // fetch("/api/services/client").then(r=>r.json()).then(setInfo)
    const s = servicesConfig.sections.find((x) => x.id === "client");
    setInfo(s);
  }, []);

  if (!info) return <div className="svc-wrap"><div className="svc-loading">Loading...</div></div>;

  return (
    <div className="svc-wrap">
      <div className="svc-container svc-page">
        <div className="svc-page-head">
          <div className="svc-pill">{info.pill}</div>
          <h1 className="svc-page-title">Client Toolkit</h1>
          <p className="svc-page-sub">{info.title}</p>
        </div>

        <div className="svc-page-grid">
          <div className="svc-panel">
            <h3>What you can do</h3>
            <ul className="svc-list">
              {info.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="svc-panel">
            
            <ul className="svc-list">
              <li>Projects list</li>
              <li>Contractor profiles</li>
              <li>Bid comparisons</li>
              <li>Milestones timeline</li>
            </ul>
 <button className="svc-btn svc-btn-ghost" onClick={() => navigate("/services/client")}>
              Sign Up as Client
            </button>
            <button className="svc-btn svc-btn-orange" onClick={() => alert("Create Project (future modal/page)")}>
              Create Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
