import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import i18n from "../utils/i18n";

const initialContext = {
  isDarkMode: false,
  toggleTheme: () => {},
  language: "en",
  changeLanguage: () => {},
};

const AppContext = createContext(initialContext);
export function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
  }, [language]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const changeLanguage = async (lang) => {
    try {
      await i18n.changeLanguage(lang);
      setLanguage(lang);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

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

export function useAppContext() {
  return useContext(AppContext);
}

AppContext.propTypes = {
  isDarkMode: PropTypes.bool,
  toggleTheme: PropTypes.func,
  language: PropTypes.string,
  changeLanguage: PropTypes.func,
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;