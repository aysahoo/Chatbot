import React from 'react'
import Navbar from '../Components/Navbar'
import InputBox from '../Components/InputBox'
import ChatArea from '../Components/ChatArea'
import Aurora from '../Components/Aurora';
import Particles from '../Components/Particles';
import { useChatbot } from '../config/context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const { userName } = useChatbot();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userName) {
      navigate('/');
    }
  }, [userName, navigate]);

  return (
    <div className="relative w-full h-svh overflow-hidden bg-black flex justify-center items-center">
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        {/* <Aurora
          colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
          blend={0.5}
          amplitude={0.5}
          speed={0.5}
        /> */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={300}
        particleSpread={15}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      </div>
      </div>
      {/* Main content centered and mobile width */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-[600px] mx-auto bg-transparent">
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
