import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-col brand">
          <div className="logo">BP</div>
          <h3 className="brand-title">BuildPro</h3>
          <p className="brand-desc">
            Leading construction management platform for modern builders and contractors.
          </p>

          <div className="socials">
            <Link to="/facebook" className="social">f</Link>
            <Link to="/twitter" className="social">t</Link>
            <Link to="/linkedin" className="social">in</Link>
            <Link to="/instagram" className="social">ig</Link>
          </div>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link to="/projects">Project Management</Link></li>
            <li><Link to="/contractors">Contractor Portal</Link></li>
            <li><Link to="/labor">Labor Management</Link></li>
            <li><Link to="/bids">Bid Management</Link></li>
            <li><Link to="/reports">Analytics & Reports</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/docs">Documentation</Link></li>
            <li><Link to="/api">API Reference</Link></li>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/training">Training Videos</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col contact">
          <h4>Contact Us</h4>
          <p className="contact-item">📍 1234 Construction Ave, Builder City, BC 12345</p>
          <p className="contact-item">
            📞 <Link to="/contact">(555) 123-4567</Link>
          </p>
          <p className="contact-item">
            ✉️ <Link to="/support">support@buildpro.com</Link>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="bottom-inner">
          <div>© 2025 BuildPro. All rights reserved.</div>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link> •{" "}
            <Link to="/terms">Terms of Service</Link> •{" "}
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
