// Link and i18n Translation Imports
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  // Hook to access the translation function
  const { t } = useTranslation();

  return (
    // Main container with background pattern
    <div className="not-found">
      {/* Decorative background pattern */}
      <div className="background-pattern"></div>

      {/* Error status code */}
      <h1>{t("error.404")}</h1>

      {/* Error message header */}
      <h2>{t("error.pageNotFound")}</h2>

      {/* Error description */}
      <p>{t("error.pageNotFoundDesc")}</p>

      {/* Navigation link back to home */}
      <Link to="/" className="home-link">
        {t("error.returnHome")}
      </Link>
    </div>
  );
};

export default NotFound;