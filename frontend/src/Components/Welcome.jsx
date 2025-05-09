import React from 'react';

const Welcome = () => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        return 'Good ☀️ Morning';
      } else if (currentHour < 18) {
        return 'Good 🌤️ Afternoon';
      } else {
        return 'Good 🌙 Evening';
      }
    };

  return (
    <>
    <div className="flex flex-col text-white/60 justify-start text-start pt-16 pl-4">
        <h1 className="text-6xl mb-4">{getCurrentGreeting()}, Ayush!</h1>
    </div>
    </>
  );
};

export default Welcome;
