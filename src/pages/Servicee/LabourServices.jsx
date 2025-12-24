import { useEffect, useState } from "react";
import { servicesConfig } from "./ServicesData";
import "./Services.css";

export default function LabourServices() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const s = servicesConfig.sections.find((x) => x.id === "labour");
    setInfo(s);
  }, []);

  if (!info) return <div className="svc-wrap"><div className="svc-loading">Loading...</div></div>;

  return (
    <div className="svc-wrap">
      <div className="svc-container svc-page">
        <div className="svc-page-head">
          <div className="svc-pill">{info.pill}</div>
          <h1 className="svc-page-title">Labour Hub</h1>
          <p className="svc-page-sub">{info.title}</p>
        </div>

        <div className="svc-page-grid">
          <div className="svc-panel">
            <h3>What you get</h3>
            <ul className="svc-list">
              {info.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="svc-panel">
            <h3>Profile & Jobs (future API)</h3>
            <ul className="svc-list">
              <li>Create skills profile</li>
              <li>Apply to local jobs</li>
              <li>Work history</li>
              <li>Payments status</li>
            </ul>

            <button className="svc-btn svc-btn-orange" onClick={() => alert("Create Profile (future)")}>
              Create Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
