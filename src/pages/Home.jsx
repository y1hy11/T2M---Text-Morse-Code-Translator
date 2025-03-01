import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Text - Morse Code Translator</h1>
        <p className="hero-description">
          A modern web application that translates between text and Morse code, with audio playback support.
        </p>
        <Link to="/convert" className="cta-button">
          Start Translating
        </Link>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Text to Morse</h3>
            <p>Convert any text to Morse code with ease.</p>
          </div>
          <div className="feature-card">
            <h3>Morse to Text</h3>
            <p>Translate Morse code back to readable text.</p>
          </div>
          <div className="feature-card">
            <h3>Audio Playback</h3>
            <p>Listen to the Morse code translation in real-time.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>Works flawlessly on both desktop and mobile devices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;