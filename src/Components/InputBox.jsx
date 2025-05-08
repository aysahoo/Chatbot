import React, { useState, useRef } from 'react'
import { Focus, AudioLines, SendHorizonal } from 'lucide-react'

const InputBox = () => {

  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleFocus = () => {
    // Scroll the chat area to the bottom on input focus
    const chatArea = document.querySelector('.chat-area');
    if (chatArea) {
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }

  return (
    <div className="sticky bottom-0 left-0 right-0 m-4 mb-6 h-16 flex items-center rounded-full bg-white/10 backdrop-blur-xl pl-4 pr-3">
      <button className="h-10 w-10 flex items-center justify-center text-white text-sm">
        <Focus />
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        className="flex-1 bg-transparent text-white placeholder-white/70 p-3 focus:outline-none"
        value={input}
        onChange={handleInputChange}
        onFocus={handleFocus}
      />
      <button className="h-10 w-10 flex items-center justify-center text-white transition text-sm">
        {input ? <SendHorizonal /> : <AudioLines />}
      </button>
    </div>
  )
}

export default InputBox
