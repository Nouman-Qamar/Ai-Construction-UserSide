import  { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  Star,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Users,
  Briefcase,
  Hammer,
} from "lucide-react";

import Button from "../../Components/Button/Button";
import { projectService } from "../../services/api";
import { ROUTES } from "../../constants/routes";
import "./userhome.css";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};


const HomePage = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [nearbyProjects, setNearbyProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  /* ===== Get User Location ===== */
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        // fallback (New York)
        setUserLocation({ lat: 40.7128, lng: -74.006 });
      }
    );
  }, []);

  /* ===== Fetch Nearby Projects ===== */
  // useEffect(() => {
  //   if (!userLocation) return;

  //   const fetchProjects = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await apiClient.getProjects({
  //         location: userLocation,
  //         limit: 6,
  //       });

  //       if (res?.success) {
  //         setNearbyProjects(res.data.projects || []);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch projects", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, [userLocation]);

  useEffect(() => {
    if (!userLocation) return;

    const fetchProjects = async () => {
      setLoading(true);
      try {
        // MOCK DATA
        const res = {
          success: true,
          data: {
            projects: [
              {
                _id: '1',
                title: 'Residential House Construction',
                category: 'Residential Construction',
                budget: '$50,000 - $75,000',
              },
              {
                _id: '2',
                title: 'Office Renovation Project',
                category: 'Commercial Construction',
                budget: '$30,000 - $45,000',
              },
              {
                _id: '3',
                title: 'Plumbing Repair Needed',
                category: 'Plumbing',
                budget: '$2,000 - $3,500',
              },
            ],
          },
        };

        if (res?.success) {
          setNearbyProjects(res.data.projects || []);
        }
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
}, [userLocation]);






  const handleSearch = () => {
    navigate(
      `${ROUTES.PROJECTS}?search=${searchQuery}&location=${location}`
    );
  };

  /* ===== STATIC DATA ===== */
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Verified Professionals",
      description: "All contractors are background checked",
    },
    {
      icon: <Star size={32} />,
      title: "Quality Guaranteed",
      description: "Every project is satisfaction guaranteed",
    },
    {
      icon: <Clock size={32} />,
      title: "Fast Matching",
      description: "Get matched within 24 hours",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Transparent Pricing",
      description: "Compare bids with no hidden fees",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Post Your Project",
      description: "Describe your requirements",
      icon: <Briefcase size={36} />,
    },
    {
      step: "2",
      title: "Get Matched",
      description: "Receive bids from professionals",
      icon: <Users size={36} />,
    },
    {
      step: "3",
      title: "Start Building",
      description: "Hire and complete your project",
      icon: <Hammer size={36} />,
    },
  ];

  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              Find trusted{" "}
              <span className="text-gradient">
                Construction Professionals
              </span>
            </h1>
            <p>Hire verified contractors near you</p>

            <div className="hero-search">
              <div className="search-input-group">
                <Search size={18} />
                <input
                  placeholder="What do you need?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="search-input-group">
                <MapPin size={18} />
                <input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <Button variant="primary" onClick={handleSearch}>
                Search
              </Button>
            </div>

            <Link to={ROUTES.SIGNUP} className="cta-link">
              Are you a contractor? Join Now
            </Link>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src="/car05.png" alt="Construction" />
            <div className="hero-badge">
              <CheckCircle size={22} />
              <span>98% Success Rate</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= MAP / PROJECTS ================= */}
      <section className="map-section container">
        <h2>Projects Near You</h2>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="projects-list">
            {nearbyProjects.map((p) => (
              <motion.div
                key={p._id}
                className="project-card-mini"
                whileHover={{ scale: 1.03 }}
                onClick={() =>
                  navigate(`${ROUTES.PROJECTS}/${p._id}`)
                }
              >
                <h4>{p.title}</h4>
                <p>{p.category}</p>
                <span>{p.budget}</span>
              </motion.div>
            ))}
          </div>
        )}

        <Button
          variant="outline"
          onClick={() => navigate(ROUTES.PROJECTS)}
        >
          View All Projects
        </Button>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-section container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible">
          <h2>Why Choose BuildFlow</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeIn} className="feature-card">
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how-it-works-section container">
        <h2>How It Works</h2>
        <div className="steps-grid">
          {howItWorks.map((s, i) => (
            <motion.div key={i} variants={fadeIn} className="step-card">
              <div className="step-number">{s.step}</div>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <h2>Ready to Start?</h2>
        <Button onClick={() => navigate(ROUTES.POST_PROJECT)}>
          Post a Project
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
