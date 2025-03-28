// Link, i18n Translation and InfoSection Component Imports
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InfoSection from "../components/InfoSection";

const Home = () => {
  // Hook to access the translation function
  const { t } = useTranslation();

  return (
    <div className="home-container">
    {/* Decorative background pattern */}
    <div className="background-pattern"></div>

    {/* Hero Section */}
    <section className="hero-section">
      {/* Main application title */}
      <h1>{t("homePage.appTitle")}</h1>

      {/* Application description */}
      <p className="hero-description">{t("homePage.heroDescription")}</p>

      {/* Call-to-action button linking to converter */}
      <Link to="/convert" className="cta-button">
        {t("homePage.startTranslating")}
      </Link>
    </section>

    {/* Information section about Morse code */}
    <InfoSection />
  </div>
  );
};

export default Home;