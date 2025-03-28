// useState, useEffect and Link  imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// LogoImg, Context and i18n Imports
import NavbarLogo from "../assets/Navbar_logo.svg";
import { useAppContext } from "../Context/AppContext";
import { useTranslation } from "react-i18next";

function Navbar() {
  // Hooks and State Management
  const { t } = useTranslation();
  const { language, changeLanguage, isDarkMode, toggleTheme } = useAppContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Sidebar toggle handler
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle Scroll-Based Sidebar Behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && sidebarOpen) {
        setSidebarOpen(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sidebarOpen, prevScrollPos]);

  return (
    <> 
      {/* Desktop Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={NavbarLogo} alt="website logo" />
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </div>
        
        {/* Desktop Navigation Links */}
        <ul className="nav-links desktop-nav">
          <li>
            <Link to="/">{t("navigation.home")}</Link>
          </li>
          <li>
            <Link to="/convert">{t("navigation.translate")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("navigation.contact")}</Link>
          </li>
        </ul>
        
        {/* Desktop Controls (Theme & Language) */}
        <div className="navbar-controls desktop-controls">
          <div className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "☀️"}
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

      {/* Mobile Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
       
        {/* Mobile Navigation Links */}
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              {t("navigation.home")}
            </Link>
          </li>
          <li>
            <Link to="/convert" onClick={toggleSidebar}>
              {t("navigation.translate")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              {t("navigation.contact")}
            </Link>
          </li>
        </ul>

        {/* Mobile Controls (Theme & Language) */}
        <div className="sidebar-controls">
          <div className="sidebar-theme-toggle">
            <button onClick={toggleTheme}>
              {isDarkMode
                ? `🌙 ${t("theme.darkMode")}`
                : `☀️ ${t("theme.lightMode")}`}
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
      
      {/* Overlay for Mobile Sidebar */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
}

export default Navbar;