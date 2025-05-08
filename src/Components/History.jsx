import React from 'react'
import { background } from '../assets/assets'
const History = () => {
  return (
    <div className="relative w-full h-svh overflow-hidden">
    {/* Background Image */}
    <img
      src={background}
      alt="background"
      className="absolute inset-0 w-full h-full object-cover brightness-50"
    />
    <div className="relative z-10 flex flex-col h-full text-amber-50">
        Hello
    </div>

    
    
  </div>
  )
}

export default History
