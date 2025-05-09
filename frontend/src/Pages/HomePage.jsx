import React, { useState, useEffect } from 'react';
import { useChatbot } from '../config/context';
import { useNavigate } from 'react-router-dom';
import Particles from '../Components/Particles';
const Homepage = () => {
  const { userName, setUserName } = useChatbot();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (userName) {
      navigate('/chat');
    }
  }, [userName, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUserName(name.trim());
      navigate('/chat');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
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
      <form
        onSubmit={handleSubmit}
        className="max-w-[300px] absolute p-6 text-white flex flex-col gap-5 w-full"
      >
        <div className="relative">
          <input
            id="username"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-3 pr-10 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="Enter your name"
            autoFocus
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-2 flex items-center justify-center text-white hover:text-white/80"
          >
            <span className="">→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Homepage;
