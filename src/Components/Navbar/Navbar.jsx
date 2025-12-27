import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"
import {  FaFileAlt, FaPlus,  } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"

import { MdTimer } from "react-icons/md"

const Navbar = () => {
  const [search, setSearch] = useState("")
  const [showQuickActions, setShowQuickActions] = useState(false)

  const location = useLocation()
  const pathname = location.pathname

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "How-It-Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    
  ]

  const quickActions = [
    { name: "New Project", icon: FaPlus, path: "/projects/new" },
    { name: "Time Entry", icon: MdTimer, path: "/time-tracking" },
    { name: "Documents", icon: FaFileAlt, path: "/documents" },

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

          <div className="quick-actions-wrapper">
            <button
              className="quick-action-btn"
              onClick={() => setShowQuickActions(!showQuickActions)}
            >
              <FaPlus className="icon" />
              <span>Quick Add</span>
            </button>

            {showQuickActions && (
              <div className="quick-actions-dropdown">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <Link
                      key={action.name}
                      to={action.path}
                      className="quick-action-item"
                      onClick={() => setShowQuickActions(false)}
                    >
                      <Icon />
                      <span>{action.name}</span>
                    </Link>
                  )
                })}
              </div>
            )}
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
