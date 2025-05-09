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
      recognitionRef.current.continuous = true;
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

  const handleClick = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <button
      className="h-10 w-10 flex items-center justify-center text-white"
      onClick={handleClick}
      aria-label={listening ? "Listening..." : "Click to stop"}
      style={{ background: listening ? "#ef4444" : "transparent" }}
    >
      <AudioLines />
    </button>
  );
};

export default AudioInput;
