export default function AlertsList({ alerts }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Alerts</h3>
        <span>{alerts.length} active</span>
      </div>

      <div className="alerts-list">
        {alerts.map((a) => (
          <div key={a.id} className={`alert-card ${a.level}`}>
            <div>
              <strong>{a.title}</strong>
              <p>{a.message}</p>
            </div>
            <span className="alert-icon">
              {a.level === "high" ? "⚠" : "⏱"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
