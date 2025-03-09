import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import morseCode from '../utils/MorseCode';

function MorseTranslator() {
    const { t } = useTranslation();
    const [inputText, setInputText] = useState('');
    const [morseText, setMorseText] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [mode, setMode] = useState('text-to-morse');

    const audioContextRef = useRef(null);
    const oscillatorRef = useRef(null);
    const playMorseCode = (morseText) => {
        if (isPlaying) return;
        setIsPlaying(true);
        const unit = 0.2;
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        const context = audioContextRef.current;
        let currentTime = context.currentTime;

        const playTone = (duration) => {
            oscillatorRef.current = context.createOscillator();
            oscillatorRef.current.frequency.setValueAtTime(600, currentTime);
            oscillatorRef.current.connect(context.destination);
            oscillatorRef.current.start(currentTime);
            oscillatorRef.current.stop(currentTime + duration);
            currentTime += duration + unit;
        };

        for (let char of morseText) {
            if (char === '.') {
                playTone(unit);
            } else if (char === '-') {
                playTone(unit * 3);
            } else if (char === ' ') {
                currentTime += unit * 3;
            }
        }

        setTimeout(() => {
            setIsPlaying(false);
        }, (currentTime - context.currentTime) * 1000);
    };

    const pauseMorseCode = () => {
        if (audioContextRef.current) {
            audioContextRef.current.close();
            setIsPlaying(false);
        }
    };

    const translateToMorse = (text) => {
        return text.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
    };

    const translateFromMorse = (morse) => {
        const reverseMorseCode = Object.entries(morseCode).reduce((acc, [key, value]) => {
            acc[value] = key;
            return acc;
        }, {});
        return morse.split(' ').map(code => reverseMorseCode[code] || '').join('');
    };

    const handleTranslate = () => {
        if (mode === 'text-to-morse') {
            const translated = translateToMorse(inputText);
            setMorseText(translated);
        } else {
            const translated = translateFromMorse(inputText);
            setMorseText(translated);
        }
    };

    return (
        <div>
            <h1 className='h1-converter'>{t('homePage.appTitle')}</h1>
            <div className="morse-translator">
                <h2>{mode === 'text-to-morse' ? t('translator.enterText') : t('translator.enterMorse')}</h2>
                <div >
                    <textarea
                        className="input-text"
                        rows="4"
                        cols="50"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder={mode === 'text-to-morse' ? t('translator.enterText') : t('translator.enterMorse')} />
                </div>
                <div className="button-group">
                    <button onClick={handleTranslate}>
                        {mode === 'text-to-morse' ? t('translator.translateToMorse') : t('translator.translateToText')}
                    </button>
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
                        {isPlaying ? t('translator.pauseMorseCode') : t('translator.playMorseCode')}
                    </button>
                    <button onClick={() => setMode(mode === 'text-to-morse' ? 'morse-to-text' : 'text-to-morse')}>
                        {t('translator.switchMode')} {mode === 'text-to-morse' ? t('translator.morseToText') : t('translator.textToMorse')}
                    </button>
                </div>
                <h2>{mode === 'text-to-morse' ? t('translator.textToMorse') : t('translator.morseToText')}</h2>
                <div className="morse-output">{morseText}</div>
            </div>
        </div>
    );
}

export default MorseTranslator;