import React, { useState } from 'react'
import { Focus, SendHorizonal, AudioLines } from 'lucide-react'
import AudioInput from './AudioInput'

const InputBox = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  // Handle sending audio blob (replace with your actual send logic)
  // const handleSendAudio = (audioBlob) => {
  //   // For demo: play the audio after recording
  //   const url = URL.createObjectURL(audioBlob);
  //   const audio = new Audio(url);
  //   audio.play();

  //   // TODO: send audioBlob to your backend or add to messages
  //   console.log("Audio blob ready to send:", audioBlob);
  // };

  // Handler for speech-to-text result
  const handleSpeechResult = (transcript) => {
    setInput(transcript);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 m-4 mb-6 h-16 flex items-center rounded-full bg-white/10 backdrop-blur-xl pl-4 pr-3">
      <button className="h-10 w-10 flex items-center justify-center text-white text-sm">
        <Focus />
      </button>
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 bg-transparent text-white placeholder-white/70 p-3 focus:outline-none"
        value={input}
        onChange={handleInputChange}
      />
      <div className="h-10 w-10 flex items-center justify-center text-white transition text-sm">
        {input
          ? <SendHorizonal />
          : <AudioInput onResult={handleSpeechResult} />
        }
      </div>
    </div>
  )
}

export default InputBox
