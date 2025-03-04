import HeadImg from '../assets/Head_img.svg';


const InfoSection = () => {
    return (
      <>
        <section className="morse-info-section">

          <div className="morse-info-content">
            <div className='h2-container'>
              <img className='img-h2' src={HeadImg} width={100} height={100} />
                <h2> What is Morse Code? </h2>
              <img className='img-h2' src={HeadImg} width={100} height={100} />
            </div>
            <p>
              Morse code is a method of encoding text characters as sequences of dots and dashes (or short and long signals). Developed in the 1830s by Samuel Morse for use with the telegraph, it was the first widely used method of electrical communication.
            </p>
            <h3>🌍 Uses of Morse Code 🌍</h3>
            <ul>
              <li><strong>🆘 Emergency Communications:</strong> Used as SOS signals (···−−−···) during emergencies when other forms of communication fail.</li>
              <li><strong>✈️ Aviation and Navigation:</strong> Employed in aviation for navigation aids and maritime communications.</li>
              <li><strong>💂‍♂️ Military Operations:</strong> Historically used in military settings for secure communications.</li>
              <li><strong>♿ Accessibility:</strong> Enables communication for people with certain disabilities who cannot use conventional methods.</li>
              <li><strong>📻 Amateur Radio:</strong> Still popular among amateur radio operators worldwide.</li>
            </ul>
          </div>
        </section>
        <section className="features-section">
          <h2><i className="bi bi-stars"></i> Features <i className="bi bi-stars"></i></h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3><i className="bi bi-keyboard"></i> Text to Morse</h3>
              <p>Convert any text to Morse code with ease.</p>
            </div>
            <div className="feature-card">
              <h3><i className="bi bi-translate"></i> Morse to Text</h3>
              <p>Translate Morse code back to readable text.</p>
            </div>
            <div className="feature-card">
              <h3><i className="bi bi-volume-up"></i> Audio Playback</h3>
              <p>Listen to the Morse code translation in real-time.</p>
            </div>
            <div className="feature-card">
              <h3><i className="bi bi-device-hdd"></i> Responsive Design</h3>
              <p>Works flawlessly on both desktop and mobile devices.</p>
            </div>
          </div>
        </section>
      </>
    );
};

export default InfoSection;