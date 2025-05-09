import React from 'react'
import { background } from '../assets/assets'
import Navbar from '../Components/Navbar'
import InputBox from '../Components/InputBox'
import ChatArea from '../Components/ChatArea'


const Chat = () => {

  return (
    <div className="relative w-full h-svh overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
  
      {/* Main content on top of background */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <Navbar />
  
        {/* Chat Area (scrollable) */}
        <div className="flex-1 overflow-y-auto p-4">
          <ChatArea />
        </div>
  
        {/* Input Box at bottom */}
        <div className="p-4">
          <InputBox />
        </div>
      </div>
    </div>
  );
  
}

export default Chat
