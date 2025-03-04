import { Link } from 'react-router-dom';
import NavbarLogo from '../assets/Navbar_logo.svg';
import { useAppContext } from '../Context/AppContext';

function Navbar() {
  const { language, changeLanguage, isDarkMode, toggleTheme } = useAppContext();
  
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={NavbarLogo} alt="website logo" />
        </Link>
      </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/convert">Translate</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      <div className="navbar-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? '🌙' : '☀️'}
          </button>
        <select 
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="language-select"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </nav>
    </>
  );
}

export default Navbar;