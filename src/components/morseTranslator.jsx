// External Dependencies and Utils
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import morseCode from "../utils/MorseCode";

function MorseTranslator() {
  // Hooks and State Management
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");
  const [morseText, setMorseText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState("text-to-morse");

  // Audio Context References
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  // Function to play Morse code audio
  const playMorseCode = (morseText) => {
    if (isPlaying) return;
    setIsPlaying(true);
    const unit = 0.2;

    // Initialize AudioContext
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();
    const context = audioContextRef.current;
    let currentTime = context.currentTime;

    // Helper function to play individual tones
    const playTone = (duration) => {
      oscillatorRef.current = context.createOscillator();
      oscillatorRef.current.frequency.setValueAtTime(600, currentTime);
      oscillatorRef.current.connect(context.destination);
      oscillatorRef.current.start(currentTime);
      oscillatorRef.current.stop(currentTime + duration);
      currentTime += duration + unit;
    };

    // Process each character in Morse code
    for (let char of morseText) {
      if (char === ".") {
        playTone(unit);
      } else if (char === "-") {
        playTone(unit * 3);
      } else if (char === " ") {
        currentTime += unit * 3;
      }
    }

    // Reset playing state after completion
    setTimeout(() => {
      setIsPlaying(false);
    }, (currentTime - context.currentTime) * 1000);
  };

  // Stops audio playback and cleans up audio context
  const pauseMorseCode = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
      setIsPlaying(false);
    }
  };

  // Functions to translate text to Morse code and vice versa
  const translateToMorse = (text) => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => morseCode[char] || "")
      .join(" ");
  };

  // Function to translate Morse code back to text
  const translateFromMorse = (morse) => {
    const reverseMorseCode = Object.entries(morseCode).reduce(
      (acc, [key, value]) => {
        acc[value] = key;
        return acc;
      },
      {}
    );
    return morse
      .split(" ")
      .map((code) => reverseMorseCode[code] || "")
      .join("");
  };

  // Handle translation based on the selected mode
  const handleTranslate = () => {
    if (mode === "text-to-morse") {
      const translated = translateToMorse(inputText);
      setMorseText(translated);
    } else {
      const translated = translateFromMorse(inputText);
      setMorseText(translated);
    }
  };

  return (
    <div>
      <h1 className="h1-converter">{t("homePage.appTitle")}</h1>
      <div className="morse-translator">

        {/* Input Section */}
        <h2>
          {mode === "text-to-morse"
            ? t("translator.enterText")
            : t("translator.enterMorse")}
        </h2>
        <div>
          <textarea
            className="input-text"
            rows="4"
            cols="50"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              mode === "text-to-morse"
                ? t("translator.enterText")
                : t("translator.enterMorse")
            }
          />
        </div>

        {/* Control Buttons */}
        <div className="button-group">

          {/* Translate Button */}
          <button onClick={handleTranslate}>
            {mode === "text-to-morse"
              ? t("translator.translateToMorse")
              : t("translator.translateToText")}
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => {
              if (isPlaying) {
                pauseMorseCode();
              } else {
                playMorseCode(morseText);
              }
            }}
            disabled={!morseText}
          >
            {isPlaying
              ? t("translator.pauseMorseCode")
              : t("translator.playMorseCode")}
          </button>

          {/* Mode Switch Button */}
          <button
            onClick={() =>
              setMode(
                mode === "text-to-morse" ? "morse-to-text" : "text-to-morse"
              )
            }
          >
            {t("translator.switchMode")}{" "}
            {mode === "text-to-morse"
              ? t("translator.morseToText")
              : t("translator.textToMorse")}
          </button>
        </div>

        {/* Output Section */}
        <h2>
          {mode === "text-to-morse"
            ? t("translator.textToMorse")
            : t("translator.morseToText")}
        </h2>
        <div className="morse-output">{morseText}</div>
      </div>
    </div>
  );
}

export default MorseTranslator;