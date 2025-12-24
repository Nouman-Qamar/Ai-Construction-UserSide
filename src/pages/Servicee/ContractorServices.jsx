import { useEffect, useState } from "react";
import { servicesConfig } from "./servicesData";
import "./services.css";

export default function ContractorServices() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const s = servicesConfig.sections.find((x) => x.id === "contractor");
    setInfo(s);
  }, []);

  if (!info) return <div className="svc-wrap"><div className="svc-loading">Loading...</div></div>;

  return (
    <div className="svc-wrap">
      <div className="svc-container svc-page">
        <div className="svc-page-head">
          <div className="svc-pill">{info.pill}</div>
          <h1 className="svc-page-title">Contractor Toolkit</h1>
          <p className="svc-page-sub">{info.title}</p>
        </div>

        <div className="svc-page-grid">
          <div className="svc-panel">
            <h3>Core Features</h3>
            <ul className="svc-list">
              {info.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="svc-panel">
            <h3>Lead Center (future API)</h3>
            <p>Yahan tum:</p>
            <ul className="svc-list">
              <li>Leads search/filter</li>
              <li>Proposal submit</li>
              <li>Reviews & verification</li>
              <li>Payments dashboard</li>
            </ul>

            <button className="svc-btn svc-btn-blue" onClick={() => alert("Browse Leads (future)")}>
              Browse Leads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
