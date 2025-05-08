import React, { useState } from 'react'
import { background } from '../assets/assets'
import { Focus, AudioLines, SendHorizonal } from 'lucide-react'

const Chat = () => {

  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value)
  };

  return (
<div className="relative w-full h-screen">
  <img
    src={background}
    alt="background"
    className="absolute w-full h-full object-cover"
  />
  <div className="relative z-10 flex flex-col h-full">
    <div className="flex-1 p-4 overflow-y-auto">
      {/* Chat area */}
    </div>
    <div className="m-4 mb-6 h-16 flex items-center rounded-full bg-white/10 backdrop-blur-xl pl-4 pr-3">
      <button className="h-8 w-8 flex items-center justify-center text-white text-sm">
        <Focus />
      </button>
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 bg-transparent text-white placeholder-white/70 p-3 focus:outline-none"
        value={input}
        onChange={handleInputChange}
      />
      <button className="h-10 w-10 flex items-center justify-center text-white transition text-sm">
        {input ? <SendHorizonal /> : <AudioLines />}
      </button>
    </div>
  </div>
</div>

  )
}

export default Chat
