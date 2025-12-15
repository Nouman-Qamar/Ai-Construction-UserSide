import "./Navbar.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      {/* HEADER */}
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

      {/* NAVBAR COMPONENTS */}
      <section className="bp-section">
        <h2>Navbar Components</h2>
        <p>Navigation bars for construction management dashboards</p>

        {/* ADMIN NAVBAR */}
        <div className="bp-card">
          <h4>Admin Dashboard Navbar</h4>
          <div className="navbar admin">
            <span className="logo">🏗 BuildPro Admin</span>

            <div className="links">
              <span className="active">Dashboard</span>
              <span>Projects</span>
              <span>Contractors</span>
              <span>Reports</span>
            </div>

            <div className="right">
              <div className="search">
                <FiSearch />
                <input placeholder="Search projects..." />
              </div>
              <FaBell />
              <FaUserCircle />
            </div>
          </div>
        </div>

        {/* CONTRACTOR NAVBAR */}
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

        {/* COMPACT NAVBAR */}
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
