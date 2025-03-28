// Core react, context, PropTypes and i18n imports
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import i18n from "../utils/i18n";

// Default context values and type definitions
const initialContext = {
  isDarkMode: false,
  toggleTheme: () => {},
  language: "en",
  changeLanguage: () => {},
};

// context with initial values
const AppContext = createContext(initialContext);
export function AppProvider({ children }) {
  // Initialize theme state from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  // Initialize language state from localStorage or default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  });

  // Set initial language on component mount
  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  // Apply and persist theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Apply and persist language changes
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
  }, [language]);

  // Toggles between light and dark theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Updates document title based on selected language
  const updateDocumentTitle = (lang) => {
    const title = document.querySelector('title');
    if (title) {
      const newTitle = title.getAttribute(`data-${lang}`) || title.getAttribute('data-en');
      document.title = newTitle;
    }
  };

  // Changes application language and updates related settings
  const changeLanguage = async (lang) => {
    try {
      await i18n.changeLanguage(lang);
      setLanguage(lang);
      updateDocumentTitle(lang);
      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  // Combine context values
  const contextValue = {
    isDarkMode,
    toggleTheme,
    language,
    changeLanguage,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

// Custom hook to access app context
export function useAppContext() {
  return useContext(AppContext);
}

// PropTypes validation for context values
AppContext.propTypes = {
  isDarkMode: PropTypes.bool,
  toggleTheme: PropTypes.func,
  language: PropTypes.string,
  changeLanguage: PropTypes.func,
};

// PropTypes validation for provider component
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;