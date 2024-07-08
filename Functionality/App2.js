import React, { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import './App.css';

function App2() {
    const [outputText, setOutputText] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const utteranceRef = useRef(null);

    const convertImageToTextAndSpeech = () => {
        const fileInput = document.getElementById('fileInput');

        if (!fileInput.files || fileInput.files.length === 0) {
            setOutputText('Please select an image file.');
            return;
        }

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                Tesseract.recognize(
                    img,
                    'eng',
                    { logger: m => console.log(m) }
                ).then(({ data: { text } }) => {
                    setOutputText(text);
                    speakText(text); // Call function to speak the extracted text
                });
            };
            img.src = event.target.result;
        };

        reader.readAsDataURL(file);
    };

    const speakText = (text) => {
        stopSpeech(); // Stop any ongoing speech synthesis
        const speech = new SpeechSynthesisUtterance(text);
        speech.onstart = () => setIsSpeaking(true);
        speech.onend = () => setIsSpeaking(false);
        utteranceRef.current = speech;
        window.speechSynthesis.speak(speech);
    };

    const pauseSpeech = () => {
        if (utteranceRef.current && isSpeaking) {
            window.speechSynthesis.pause();
            setIsSpeaking(false);
        }
    };

    const resumeSpeech = () => {
        if (utteranceRef.current && !isSpeaking) {
            window.speechSynthesis.resume();
            setIsSpeaking(true);
        }
    };

    const stopSpeech = () => {
        if (utteranceRef.current) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };

    const saveTextToFile = () => {
        // Create a Blob containing the text
        const blob = new Blob([outputText], { type: 'text/plain' });
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        anchor.href = window.URL.createObjectURL(blob);
        // Set the file name
        anchor.download = 'recognized_text.txt';
        // Simulate a click to trigger the download
        anchor.click();
    };

    return (
        <div className="container3">
            <h1></h1>
            <input type="file" id="fileInput" accept="image/*" />
            <button onClick={convertImageToTextAndSpeech}>Convert and Speak</button>
            <button onClick={pauseSpeech} disabled={!isSpeaking}>Pause</button>
            <button onClick={resumeSpeech} disabled={isSpeaking}>Resume</button>
            <button onClick={stopSpeech}>Stop</button>
            <button onClick={saveTextToFile}>Save Text</button>
            <textarea value={outputText} rows="15" readOnly />
        </div>
    );
}

export default App2;
