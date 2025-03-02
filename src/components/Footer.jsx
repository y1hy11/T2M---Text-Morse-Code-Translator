import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Morse Code Translator is a modern web application that helps you convert text to Morse code and vice versa.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://github.com/y1hy11" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com/y1hy11" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com/in/y1hy11" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} | Morse Code Translator | All rights reserved.</p>
        <p>Made with <span className="heart">❤</span> by <a href="https://github.com/y1hy11" target="_blank" rel="noopener noreferrer">y1hy11</a></p>
      </div>
    </footer>
  );
};

export default Footer;