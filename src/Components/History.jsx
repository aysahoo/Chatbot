import React, { useState } from 'react'
import { background } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const History = () => {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(null);

  // Sample chatbot conversation history
  const conversations = [
    {
      id: 1,
      title: 'React Development Help',
      date: '2024-03-20',
      lastMessage: 'How do I implement custom hooks?',
      messages: 24
    },
    {
      id: 2,
      title: 'JavaScript Debugging',
      date: '2024-03-19',
      lastMessage: 'Fixed the async/await issue',
      messages: 15
    },
    {
      id: 3,
      title: 'CSS Styling Questions',
      date: '2024-03-18',
      lastMessage: 'Understanding Tailwind classes',
      messages: 32
    }
  ]

  const handleChatClick = (chatId) => {
    navigate(`/`);
  }

  const handleDelete = (e, chatId) => {
    e.stopPropagation();
    // Add your delete logic here
    console.log('Deleting chat:', chatId);
  }

  return (
    <div className="relative w-full h-svh overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      {/* Content */}
      <div className="relative z-10 p-7 pt-10 flex flex-col gap-8 h-full text-white">
        <div className="text-5xl">History</div>
        <div className="space-y-4">
          {conversations.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white">{chat.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{chat.lastMessage}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-white/50 text-xs">{chat.date}</span>
                    <span className="text-white/50 text-xs">•</span>
                    <span className="text-white/50 text-xs">{chat.messages} messages</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => handleDelete(e, chat.id)}
                  className="text-white/50 hover:text-red-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History
