import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Morse Code Translator. All rights reserved.</p>
        <p>Made with <span className="heart">❤</span> by <a href="https://github.com/y1hy11" target="_blank" rel="noopener noreferrer">y1hy11</a></p>
      </div>
    </footer>
  );
};

export default Footer;