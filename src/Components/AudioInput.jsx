import React, { useState, useRef } from "react";
import { AudioLines } from "lucide-react";

const AudioInput = ({ onResult }) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const getRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return null;
    }
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (onResult) onResult(transcript);
      };
      recognitionRef.current.onerror = (event) => {
        setListening(false);
      };
      recognitionRef.current.onend = () => {
        setListening(false);
      };
    }
    return recognitionRef.current;
  };

  const startListening = () => {
    const recognition = getRecognition();
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    const recognition = getRecognition();
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  return (
    <button
      className="h-10 w-10 flex items-center justify-center text-white"
      onMouseDown={startListening}
      onMouseUp={stopListening}
      onTouchStart={startListening}
      onTouchEnd={stopListening}
      aria-label={listening ? "Listening..." : "Hold to speak"}
      style={{ background: listening ? "#ef4444" : "transparent" }}
    >
      <AudioLines />
    </button>
  );
};

export default AudioInput;
