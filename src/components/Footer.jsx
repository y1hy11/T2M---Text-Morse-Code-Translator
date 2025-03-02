import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-section">
          <h3><i className="bi bi-info-circle"></i> About Us</h3>
          <p>
            Morse Code Translator is a modern web application that helps you convert text to Morse code and vice versa.
          </p>
        </div>

        <div className="footer-section">
          <h3><i className="bi bi-link-45deg"></i> Quick Links</h3>
          <div className="footer-links">
            <Link to="/privacy-policy"><i className="bi bi-shield-check"></i> Privacy Policy</Link>
            <Link to="/contact"><i className="bi bi-envelope"></i> Contact Us</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3><i className="bi bi-people"></i> Connect With Us</h3>
          <div className="social-links">
            <a href="https://github.com/y1hy11" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i> 
            </a>
            <a href="https://twitter.com/y1hy11" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i> 
            </a>
            <a href="https://linkedin.com/in/y1hy11" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i> 
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p><i className="bi bi-c-circle"></i> {new Date().getFullYear()} | Morse Code Translator | All rights reserved.</p>
        <p>Made with <i className="bi bi-heart-fill text-danger"></i> by <a href="https://github.com/y1hy11" target="_blank" rel="noopener noreferrer">y1hy11</a></p>
      </div>
    </footer>
  );
};

export default Footer;