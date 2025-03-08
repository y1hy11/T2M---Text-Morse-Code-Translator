import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy">
      <h1>{t('privacy.title')}</h1>
      <div className="policy-content">
        <section>
          <h2>{t('privacy.infoWeCollect')}</h2>
          <p>
            {t('footer.aboutText')}
          </p>
        </section>

        <section>
          <h2>{t('privacy.cookies')}</h2>
          <p>
            {t('privacy.cookiesInfo')}
          </p>
        </section>

        <section>
          <h2>{t('privacy.thirdPartyServices')}</h2>
          <p>
            {t('privacy.thirdPartyServicesInfo')}
          </p>
        </section>

        <section>
          <h2>{t('privacy.changes')}</h2>
          <p>
            {t('privacy.changesDesc')}
          </p>
          <p>
            {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
          </p>
        </section>

        <section>
          <h2>{t('contact.title')}</h2>
          <p>
            {t('privacy.contactDesc')} <Link to="/contact">{t('navigation.contact')}</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;