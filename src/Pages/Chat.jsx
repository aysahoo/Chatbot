import React from 'react'
import { background } from '../assets/assets'
import Navbar from '../Components/Navbar'
import InputBox from '../Components/InputBox'

const Chat = () => {

  return (
<div className="relative w-full h-dvh">
  <img
    src={background}
    alt="background"
    className="absolute w-full h-full object-cover"
  />
  <div className="relative z-10 flex flex-col h-full">
    <Navbar />
    <div className="flex-1 p-4 overflow-y-auto">
      {/* Chat area */}
    </div>
    <InputBox />
  </div>
</div>

  )
}

export default Chat
