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
          <a href="https://github.com/Y1hy11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github">
                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6.0 00-1.3-3.2 4.2 4.2.0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3.0 00-6.2.0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2.0 00-.1 3.2A4.6 4.6.0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path></svg>
              </a>
              <a href="https://x.com/y1hy1_1"
                target="_blank" 
                rel="noopener noreferrer" 
                className="twitter">
                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/yahya-elalaoui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
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