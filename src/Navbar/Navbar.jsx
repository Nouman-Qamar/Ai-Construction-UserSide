import "./Navbar.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState([]);
  const [contractors, setContractors] = useState([]);
  const [reports, setReports] = useState([]);

  
  const dummyProjects = [
    { id: 1, name: 'Skyline Tower', status: 'In Progress', budget: 5000000 },
    { id: 2, name: 'Riverside Mall', status: 'Planning', budget: 3000000 },
    { id: 3, name: 'Green Park Residences', status: 'Completed', budget: 2000000 },
  ];

  const dummyContractors = [
    { id: 1, name: 'ABC Construction', rating: 4.5, projects: 15 },
    { id: 2, name: 'XYZ Builders', rating: 4.2, projects: 8 },
    { id: 3, name: 'BuildMasters Inc.', rating: 4.8, projects: 22 },
  ];

  const dummyReports = [
    { id: 1, title: 'Monthly Progress Report', date: '2025-12-01', type: 'Progress' },
    { id: 2, title: 'Budget Analysis', date: '2025-11-30', type: 'Financial' },
    { id: 3, title: 'Safety Audit', date: '2025-11-28', type: 'Safety' },
  ];

  useEffect(() => {
   
    setProjects(dummyProjects);
    setContractors(dummyContractors);
    setReports(dummyReports);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log(`Navigating to ${link}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  
    const filtered = dummyProjects.filter(project => 
      project.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProjects(filtered);
    console.log(`Searching for: ${e.target.value}`);
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'Projects':
        return (
          <div className="content-section">
            <h3>Projects</h3>
            <ul>
              {projects.map(project => (
                <li key={project.id}>
                  <strong>{project.name}</strong> - {project.status} - Budget: ${project.budget.toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'Contractors':
        return (
          <div className="content-section">
            <h3>Contractors</h3>
            <ul>
              {contractors.map(contractor => (
                <li key={contractor.id}>
                  <strong>{contractor.name}</strong> - Rating: {contractor.rating} - Projects: {contractor.projects}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'Reports':
        return (
          <div className="content-section">
            <h3>Reports</h3>
            <ul>
              {reports.map(report => (
                <li key={report.id}>
                  <strong>{report.title}</strong> - {report.date} - Type: {report.type}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return (
          <div className="content-section">
            <h3>Dashboard</h3>
            <p>Welcome to BuildPro Admin Dashboard</p>
            <p>Total Projects: {projects.length}</p>
            <p>Total Contractors: {contractors.length}</p>
            <p>Total Reports: {reports.length}</p>
          </div>
        );
    }
  };

  return (
    <>
     
      <header className="bp-header">
        <h1>BuildPro Component Library</h1>
        <p>Construction Management SaaS UI Components</p>

        <div className="bp-tabs">
          <button>Button</button>
          <button>Card</button>
          <button className="active">Navbar</button>
          <button>Footer</button>
          <button>Modal</button>
          <button>Form Fields</button>
          <button>Carousel</button>
        </div>
      </header>

      <section className="bp-section">
        <h2>Navbar Components</h2>
        <p>Navigation bars for construction management dashboards</p>

      
        <div className="bp-card">
          <h4>Admin Dashboard Navbar</h4>
          <div className="navbar admin">
            <span className="logo">🏗 BuildPro Admin</span>

            <div className="links">
              <span 
                className={activeLink === 'Dashboard' ? 'active' : ''} 
                onClick={() => handleLinkClick('Dashboard')}
              >
                Dashboard
              </span>
              <span 
                className={activeLink === 'Projects' ? 'active' : ''} 
                onClick={() => handleLinkClick('Projects')}
              >
                Projects
              </span>
              <span 
                className={activeLink === 'Contractors' ? 'active' : ''} 
                onClick={() => handleLinkClick('Contractors')}
              >
                Contractors
              </span>
              <span 
                className={activeLink === 'Reports' ? 'active' : ''} 
                onClick={() => handleLinkClick('Reports')}
              >
                Reports
              </span>
            </div>

            <div className="right">
              <div className="search">
                <FiSearch />
                <input 
                  placeholder="Search projects..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <FaBell />
              <FaUserCircle />
            </div>
          </div>
          {renderContent()}
        </div>

        <div className="bp-card">
          <h4>Contractor Dashboard Navbar</h4>
          <div className="navbar contractor">
            <span className="logo">🏗 BuildPro Contractor</span>

            <div className="links">
              <span className="active">My Projects</span>
              <span>Bids</span>
              <span>Team</span>
              <span>Invoices</span>
            </div>

            <div className="right">
              <FaBell />
              <FaUserCircle />
            </div>
          </div>
        </div>

       
        <div className="bp-card">
          <h4>Compact Navbar</h4>
          <div className="navbar compact">
            <span className="logo">🏗 BuildPro</span>
            <div className="links">
              <span>Dashboard</span>
              <span>Projects</span>
              <span>Team</span>
            </div>
            <FaUserCircle />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
