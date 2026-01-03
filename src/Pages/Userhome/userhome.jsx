import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
// Map component (you can add JobsMap here later)
import "./userHome.css";

/* ===== Animations ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const hoverCard = {
  hover: {
    y: -5,
    scale: 1.03,
    transition: { type: "spring", stiffness: 300 }
  }
};

// Dummy jobs for now (future API)
const jobs = [
  { id: 1, title: "House Painting", category: "Painting", lat: 31.52, lng: 74.36, price: "$120" },
  { id: 2, title: "Electric Wiring", category: "Electrician", lat: 31.515, lng: 74.35, price: "$80" }
];

// Quick Action Cards with paths
const quickActions = [
  { icon: "➕", title: "Post Job", subtitle: "Create a new construction job", path: "/post-job" },
  { icon: "🗺️", title: "Nearby Jobs", subtitle: "View jobs near your location", path: "/jobs" },
  { icon: "💬", title: "Messages", subtitle: "Connect with contractors", path: "/messages" },
  { icon: "👤", title: "Profile", subtitle: "Manage your account", path: "/account" }
];

function UserHome() {
  const navigate = useNavigate(); 

  return (
    <div className="home-page">

      
      <section className="hero">
        <div className="hero-inner hero-split">
          <motion.div className="hero-content" variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="hero-title">
              Welcome Back 👋 <br />
              Explore Nearby <span className="highlight-text">Projects</span>
            </h1>
            <p className="hero-sub">
              View live construction activity and opportunities near your location.
            </p>
          </motion.div>

          <motion.div className="hero-image" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <img src="/card5.png" alt="Dashboard Overview" />
          </motion.div>
        </div>
      </section>

      
      <motion.section className="quick-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="actions-grid">
          {quickActions.map((action, i) => (
            <motion.div
              key={i}
              className="action-card"
              whileHover="hover"
              variants={hoverCard}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(action.path)} 
            >
              <div className="action-icon">{action.icon}</div>
              <h3 className="action-title">{action.title}</h3>
              <p className="action-sub">{action.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

     
      <motion.section className="locations-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="locations-inner">
          <span className="badge success">Live Map</span>
          <h2 className="locations-title">Projects Near You</h2>
          <p className="locations-sub">Explore active construction projects based on your location.</p>

         
          <div className="map-container">
            🗺️ Interactive Map Will Load Here
          </div>
        </div>
      </motion.section>

    </div>
  );
}

export default UserHome;
