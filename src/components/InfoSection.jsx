// HeadImg and i18n Translation Imports
import HeadImg from "../assets/Head_img.svg";
import { useTranslation } from "react-i18next";

const InfoSection = () => {
  // Hook to access the translation function
  const { t } = useTranslation();

  return (
    <>
      {/* Morse Code Information Section */}
      <section className="morse-info-section">
        <div className="morse-info-content">
          <div className="h2-container">
            <img
              className="img-h2"
              src={HeadImg}
              width={100}
              height={100}
              alt="Morse code icon"
            />
            <h2>{t("homePage.whatIsMorse")}</h2>
            <img
              className="img-h2"
              src={HeadImg}
              width={100}
              height={100}
              alt="Morse code icon"
            />
          </div>

          {/* Morse Code Definition */}
          <p>{t("homePage.morseDefinition")}</p>

          {/* Uses of Morse Code Section */}
          <h3>🌍 {t("homePage.usesOfMorse")} 🌍</h3>
          <ul>
            <li>
              <strong>🆘 {t("homePage.emergency")}:</strong>{" "}
              {t("homePage.emergencyDesc")}
            </li>
            <li>
              <strong>✈️ {t("homePage.aviation")}:</strong>{" "}
              {t("homePage.aviationDesc")}
            </li>
            <li>
              <strong>💂‍♂️ {t("homePage.military")}:</strong>{" "}
              {t("homePage.militaryDesc")}
            </li>
            <li>
              <strong>♿ {t("homePage.accessibility")}:</strong>{" "}
              {t("homePage.accessibilityDesc")}
            </li>
            <li>
              <strong>📻 {t("homePage.amateurRadio")}:</strong>{" "}
              {t("homePage.amateurRadioDesc")}
            </li>
          </ul>
        </div>
      </section>

      {/* Uses of Morse Code Section */}
      <section className="features-section">
        <h2>
          <i className="bi bi-stars"></i> {t("features.title")}{" "}
          <i className="bi bi-stars"></i>
        </h2>

        {/* Features Grid Layout */}
        <div className="features-grid">
          <div className="feature-card">
            <h3>
              <i className="bi bi-keyboard"></i> {t("translator.textToMorse")}
            </h3>
            <p>{t("features.textToMorse")}</p>
          </div>

          {/* Morse to Text Feature Card */}
          <div className="feature-card">
            <h3>
              <i className="bi bi-translate"></i> {t("translator.morseToText")}
            </h3>
            <p>{t("features.morseToText")}</p>
          </div>

          {/* Audio Playback Feature Card*/}
          <div className="feature-card">
            <h3>
              <i className="bi bi-volume-up"></i>{" "}
              {t("translator.playMorseCode")}
            </h3>
            <p>{t("features.audioPlayback")}</p>
          </div>
            
          {/* Reponsive design Feature Card */}
          <div className="feature-card">
            <h3>
              <i className="bi bi-device-hdd"></i> {t("features.title")}
            </h3>
            <p>{t("features.responsiveDesign")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;