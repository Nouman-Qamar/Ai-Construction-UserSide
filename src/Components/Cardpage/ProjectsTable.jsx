export default function ProjectsTable({ projects, onOverviewClick }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Projects</h3>

        <button
          className="overview-btn"
          onClick={onOverviewClick}
        >
          Overview
        </button>
      </div>

      <div className="table-wrapper">
        <table className="card-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Type</th>
              <th>Due</th>
              <th>Team</th>
              <th>Budget</th>
              <th>Progress</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td>
                  <div className="project-name">{p.name}</div>
                  <div className="project-id">#{p.id}</div>
                </td>
                <td>{p.type}</td>
                <td>{p.due}</td>
                <td>{p.contractors} contractors, {p.workers} workers</td>
                <td>{p.budget}</td>
                <td>
                  <div className="progress-row">
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${p.progress > 50 ? "orange" : "yellow"}`}
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                    <span>{p.progress}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${p.statusColor}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
