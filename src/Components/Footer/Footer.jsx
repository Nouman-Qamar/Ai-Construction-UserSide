import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col brand">
          <div className="logo">BP</div>
          <h3 className="brand-title">BuildPro</h3>
          <p className="brand-desc">Leading construction management platform for modern builders and contractors.</p>
          <div className="socials">
            <span className="social">f</span>
            <span className="social">t</span>
            <span className="social">in</span>
            <span className="social">ig</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>Project Management</li>
            <li>Contractor Portal</li>
            <li>Labor Management</li>
            <li>Bid Management</li>
            <li>Analytics &amp; Reports</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Help Center</li>
            <li>Training Videos</li>
            <li>Case Studies</li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact Us</h4>
          <p className="contact-item">📍 1234 Construction Ave, Builder City, BC 12345</p>
          <p className="contact-item">📞 (555) 123-4567</p>
          <p className="contact-item">✉️ support@buildpro.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-inner">
          <div>© 2025 BuildPro. All rights reserved.</div>
          <div className="bottom-links">Privacy Policy • Terms of Service • Cookie Policy</div>
        </div>
      </div>
    </footer>
  )
}
