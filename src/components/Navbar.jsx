import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from '../assets/Navbar_logo.svg';
import { useAppContext } from '../Context/AppContext';

function Navbar() {
  const { language, changeLanguage, isDarkMode, toggleTheme } = useAppContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (currentScrollPos > prevScrollPos && sidebarOpen) {
        setSidebarOpen(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sidebarOpen, prevScrollPos]);
  
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={NavbarLogo} alt="website logo" />
        </Link>
      </div>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </div>
      <ul className="nav-links desktop-nav">
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
      <div className="navbar-controls desktop-controls">
        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '🌙' : '☀️'}
        </div>
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

    <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <ul className="sidebar-links">
        <li>
          <Link to="/" onClick={toggleSidebar}>Home</Link>
        </li>
        <li>
          <Link to="/convert" onClick={toggleSidebar}>Translate</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
        </li>
      </ul>
      <div className="sidebar-controls">
        <div className="sidebar-theme-toggle">
          <button onClick={toggleTheme}>
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <div className="sidebar-language">
          <select 
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
    {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;