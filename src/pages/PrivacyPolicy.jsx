// Link and i18n translation imports
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  // Initialize translation function
  const { t } = useTranslation();

  return (
    // Main container for the privacy policy page
    <div className="privacy-policy">
      {/* Decorative background pattern */}
      <div className="background-pattern"></div>
      
      {/* Page title */}
      <h1>{t("privacy.title")}</h1>
      
      {/* Policy content sections */}
      <div className="policy-content">
        {/* Information Collection Section */}
        <section>
          <h2>{t("privacy.infoWeCollect")}</h2>
          <p>{t("footer.aboutText")}</p>
        </section>

        {/* Cookie Policy Section */}
        <section>
          <h2>{t("privacy.cookies")}</h2>
          <p>{t("privacy.cookiesInfo")}</p>
        </section>

        {/* Third-Party Services Section */}
        <section>
          <h2>{t("privacy.thirdPartyServices")}</h2>
          <p>{t("privacy.thirdPartyServicesInfo")}</p>
        </section>

        {/* Policy Changes Section */}
        <section>
          <h2>{t("privacy.changes")}</h2>
          <p>{t("privacy.changesDesc")}</p>
          {/* Dynamic last updated date */}
          <p>
            {t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>
        </section>

        {/* Contact Information Section */}
        <section>
          <h2>{t("contact.title")}</h2>
          <p>
            {t("privacy.contactDesc")}{" "}
            <Link to="/contact">{t("navigation.contact")}</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;