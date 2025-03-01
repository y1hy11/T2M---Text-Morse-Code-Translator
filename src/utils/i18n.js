import { createContext, useState } from 'react';

// Available languages
const languages = {
  en: {
    home: {
      title: 'Text - Morse Code Translator',
      description: 'A modern web application that translates between text and Morse code, with audio playback support.',
      cta: 'Start Translating',
      featuresHeading: 'Features',
      features: {
        textToMorse: {
          title: 'Text to Morse',
          description: 'Convert any text to Morse code with ease.'
        },
        morseToText: {
          title: 'Morse to Text',
          description: 'Translate Morse code back to readable text.'
        },
        audio: {
          title: 'Audio Playback',
          description: 'Listen to the Morse code translation in real-time.'
        },
        responsive: {
          title: 'Responsive Design',
          description: 'Works flawlessly on both desktop and mobile devices.'
        }
      }
    },
    translator: {
      title: 'Text - Morse Code Translator',
      textLabel: 'Text:',
      morseLabel: 'Morse Code:',
      textPlaceholder: 'Enter text',
      morsePlaceholder: 'Enter Morse code',
      translateToMorse: 'Translate to Morse',
      translateToText: 'Translate to Text',
      play: 'Play Morse Code',
      pause: 'Pause Morse Code',
      switchToMorse: 'Switch to Morse to Text',
      switchToText: 'Switch to Text to Morse'
    },
    nav: {
      home: 'Home',
      translate: 'Translate',
      contact: 'Contact'
    },
    footer: {
      privacy: 'Privacy Policy',
      copyright: '© 2024 Morse Code Translator. All rights reserved.',
      madeWith: 'Made with ❤ by'
    }
  }
};

// Create context
export const I18nContext = createContext();

// Provider component
export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => {
    const keys = key.split('.');
    let value = languages[language];
    
    for (const k of keys) {
      if (!value[k]) return key;
      value = value[k];
    }
    
    return value;
  };
  
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export { I18nContext };
export default I18nProvider;