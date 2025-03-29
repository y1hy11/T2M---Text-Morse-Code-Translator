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

  // SVG icons as components for theme toggle
  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

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
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
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
            <button onClick={toggleTheme} className="theme-button-toggle">
              {isDarkMode ? (
                <>
                  <MoonIcon /> {t("theme.darkMode")}
                </>
              ) : (
                <>
                  <SunIcon /> {t("theme.lightMode")}
                </>
              )}
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
