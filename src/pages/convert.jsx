// MorseTranslator Component Import
import MorseTranslator from '../components/morseTranslator';

const Convert = () => {
  return (
    // Main container for the conversion page
    <div className="convert-page">
     
      {/* Decorative background pattern element */}
      <div className="background-pattern"></div>
      
      {/* Main translator component */}
      <MorseTranslator />
    </div>
  );
};

export default Convert;