import React from 'react';
import { useChatbot } from '../config/context';

const Welcome = () => {
  const { userName } = useChatbot();
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 6) {
      return 'Good 🌙 Night ';
    } else if (hour >= 6 && hour < 12) {
      return 'Good ☀️ Morning ';
    } else if (hour >= 12 && hour < 18) {
      return 'Good 🌤️ Afternoon ';
    } else {
      return 'Good 🌙 Evening ';
    }
  };

  return (
    <>
    <div className="flex flex-col text-white/60 justify-start text-start pt-16 pl-4">
        <h1 className="text-6xl mb-4">{getCurrentGreeting()}, {userName || 'User'}!</h1>
    </div>
    </>
  );
};

export default Welcome;
