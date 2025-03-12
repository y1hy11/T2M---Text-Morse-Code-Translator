import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InfoSection from "../components/InfoSection";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>{t("homePage.appTitle")}</h1>
        <p className="hero-description">{t("homePage.heroDescription")}</p>
        <Link to="/convert" className="cta-button">
          {t("homePage.startTranslating")}
        </Link>
      </section>
      <InfoSection />
    </div>
  );
};

export default Home;