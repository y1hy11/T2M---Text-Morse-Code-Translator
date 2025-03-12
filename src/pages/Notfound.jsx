import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <h1>{t("error.404")}</h1>
      <h2>{t("error.pageNotFound")}</h2>
      <p>{t("error.pageNotFoundDesc")}</p>
      <Link to="/" className="home-link">
        {t("error.returnHome")}
      </Link>
    </div>
  );
};

export default NotFound;