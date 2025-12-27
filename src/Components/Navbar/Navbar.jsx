import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"
import { FiSearch } from "react-icons/fi"

const Navbar = () => {
  const [search, setSearch] = useState("")

  const location = useLocation()
  const pathname = location.pathname

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How-It-Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    
  ]



 
 
  return (
    <div className="bp-card">
      <div className="navbar admin">
        <Link to="/" className="logo">
          🏗 BuildPro Admin
        </Link>

        <div className="links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="right">
          

          <div className="search">
            <FiSearch />
            <input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="auth-links">
            
            <Link to="/signup" className="signup-btn">
             Login / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
