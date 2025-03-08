import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message.trim()
    };
    setFieldErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_API_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission - Morse Code Translator'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus({
          submitted: true,
          error: false
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setFormStatus({
          submitted: false,
          error: true
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>{t('contact.title')}</h1>
      <p className="contact-intro">
        {t('contact.intro')}
      </p>
      
      {formStatus.submitted ? (
        <div className="form-success">
          <h2>{t('contact.thankYou')}</h2>
          <p>{t('contact.willReply')}</p>
          <button onClick={() => setFormStatus({ submitted: false, error: false })}>
            {t('contact.sendAnother')}
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.name')}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(t('contact.nameRequired'));
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
            />
            {fieldErrors.name && (
              <span className="field-error">{t('contact.nameRequired')}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.email')}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(t('contact.emailInvalid'));
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
            />
            {fieldErrors.email && (
              <span className="field-error">{t('contact.emailInvalid')}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              className='message-input'
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.message')}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(t('contact.messageRequired'));
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
            />
            {fieldErrors.message && (
              <span className="field-error">{t('contact.messageRequired')}</span>
            )}
          </div>
          
          {formStatus.error && (
            <div className="form-error">
              <p>{t('contact.errorMessage', 'There was an error submitting your message. Please try again.')}</p>
            </div>
          )}
          
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? t('contact.sending', 'Sending...') : t('contact.sendMessage')}
          </button>
        </form>
      )}
      
      <div className="additional-contact">
        <h2>{t('contact.otherWays')}</h2>
        <p>{t('contact.visitGithub1')} <a href="https://github.com/y1hy11/Text---Morse-Code-Translator" target="_blank" rel="noopener noreferrer">{t('contact.visitGithuba')}</a> {t('contact.visitGithub2')}</p>
      </div>
    </div>
  );
};

export default Contact;