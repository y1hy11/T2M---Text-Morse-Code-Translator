import { Link } from 'react-router-dom';
import '../styles/pages/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <div className="policy-content">
        <section>
          <h2>Information We Collect</h2>
          <p>
            The Morse Code Translator is a client-side application. All translations and operations are performed locally in your browser. We do not collect or store any of your translated text or personal information.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            This application does not use cookies or similar tracking technologies.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            We do not use any third-party services that collect user data.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page.
          </p>
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through the <Link to="/contact">Contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;