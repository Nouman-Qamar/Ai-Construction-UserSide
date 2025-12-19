
import { useState } from "react"
import "./Navbar.css"
import { FaBell, FaUserCircle } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"

const Navbar = () => {
  const [adminActive, setAdminActive] = useState("Dashboard")
  const [search, setSearch] = useState("")

  return (
    <div className="bp-card">
      <div className="navbar admin">
        <span className="logo">🏗 BuildPro Admin</span>

        <div className="links">
          {["Dashboard", "Projects", "Contractors", "Reports"].map((item) => (
            <span key={item} className={adminActive === item ? "active" : ""} onClick={() => setAdminActive(item)}>
              {item}
            </span>
          ))}
        </div>

        <div className="right">
          <div className="search">
            <FiSearch />
            <input placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <FaBell className="icon" title="Notifications" />
          <FaUserCircle className="icon" title="Profile" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
