// link and i18n translation imports
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  // Hook to access the translation function
  const { t } = useTranslation();

  return (
    <footer className="footer-container">

      {/* Main Footer Grid Layout */}
      <div className="footer-grid">

        {/* About Section */}
        <div className="footer-section">
          <h3>
            <i className="bi bi-info-circle"></i> {t("footer.aboutUs")}
          </h3>
          <p>{t("footer.aboutText")}</p>
        </div>

        {/* Quick Links Navigation */}
        <div className="footer-section">
          <h3>
            <i className="bi bi-link-45deg"></i> {t("footer.quickLinks")}
          </h3>

          {/* Footer Links */}
          <div className="footer-links">
            <Link to="/privacy-policy">
              <i className="bi bi-shield-check"></i> {t("footer.privacyPolicy")}
            </Link>
            <Link to="/contact">
              <i className="bi bi-envelope"></i> {t("navigation.contact")}
            </Link>
          </div>
        </div>
        
        {/* Social Media Connections */}
        <div className="footer-section">
          <h3>
            <i className="bi bi-people"></i> {t("footer.connectWithUs")}
          </h3>
          <div className="social-links">
            <a
              href="https://github.com/y1hy11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://x.com/y1hy1_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          <i className="bi bi-c-circle"></i> {new Date().getFullYear()} |{" "}
          {t("homePage.appTitle")} | {t("footer.allRights")}
        </p>
        <p>
          {t("footer.madeWith")}{" "}
          <i className="bi bi-heart-fill text-danger"></i> {t("footer.by")}{" "}
          <a
            href="https://github.com/y1hy11"
            target="_blank"
            rel="noopener noreferrer"
          >
            y1hy11
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;