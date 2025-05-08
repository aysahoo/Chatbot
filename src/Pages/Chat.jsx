import React from 'react'
import { background } from '../assets/assets'
import Navbar from '../Components/Navbar'
import InputBox from '../Components/InputBox'
import ChatArea from '../Components/ChatArea'
const Chat = () => {

  return (
<div className="relative w-full h-svh ">
  <img
    src={background}
    alt="background"
    className="absolute w-full h-full object-cover brightness-50"
  />
  <div className="relative z-10 flex flex-col h-full">
    <Navbar />
    <div className="flex-1 p-4 overflow-y-auto">
      <ChatArea />
    </div>
    <InputBox />
  </div>
</div>

  )
}

export default Chat
