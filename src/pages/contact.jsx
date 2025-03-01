import { useState } from 'react';
import '../styles/pages/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions or feedback about the Morse Code Translator? We'd love to hear from you!
      </p>
      
      {formStatus.submitted ? (
        <div className="form-success">
          <h2>Thank you for your message!</h2>
          <p>We'll get back to you as soon as possible.</p>
          <button onClick={() => setFormStatus({ submitted: false, error: false })}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      )}
      
      <div className="additional-contact">
        <h2>Other Ways to Connect</h2>
        <p>Visit our <a href="https://github.com/y1hy11/Text---Morse-Code-Translator" target="_blank" rel="noopener noreferrer">GitHub repository</a> to contribute to the project.</p>
      </div>
    </div>
  );
};

export default Contact;