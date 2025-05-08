import React from 'react'

const messages = [
  { id: 1, user: 'Alice', text: 'Hey, how are you doing today?', isUser: false },
  { id: 2, user: 'You', text: 'I am good, thanks! How about you?', isUser: true },
  { id: 3, user: 'Alice', text: 'Pretty good, just working on some projects.', isUser: false },
  { id: 4, user: 'You', text: 'That sounds interesting. What kind of projects?', isUser: true },
  { id: 5, user: 'Alice', text: 'Mostly web development and some AI stuff.', isUser: false },
  { id: 6, user: 'You', text: 'Cool! I have been learning React lately.', isUser: true },
  { id: 7, user: 'Alice', text: 'React is awesome! Have you tried hooks?', isUser: false },
  { id: 8, user: 'You', text: 'Yes, useState and useEffect are very useful.', isUser: true },
  { id: 9, user: 'Alice', text: 'Absolutely! They make functional components so much better.', isUser: false },
  { id: 10, user: 'You', text: 'Totally agree. By the way, want to grab coffee sometime?', isUser: true },
  { id: 11, user: 'Alice', text: 'Sure! Let me know when you are free.', isUser: false },
  { id: 12, user: 'You', text: 'How about this weekend?', isUser: true },
  { id: 13, user: 'Alice', text: 'Works for me. Looking forward to it!', isUser: false },
  { id: 14, user: 'You', text: 'Great! I will text you the details.', isUser: true },
  { id: 15, user: 'Alice', text: 'Awesome, see you then!', isUser: false },
  { id: 16, user: 'You', text: 'See you!', isUser: true },
  { id: 17, user: 'Alice', text: 'By the way, did you check out the new React update?', isUser: false },
  { id: 18, user: 'You', text: 'Not yet, planning to this weekend.', isUser: true },
  { id: 19, user: 'Alice', text: 'You should! Lots of cool features.', isUser: false },
  { id: 20, user: 'You', text: 'Thanks for the heads up!', isUser: true },
]

const ChatArea = () => {
    return (
        <div className="gap-4 p-3 rounded-xl pb-28 overflow-y-auto">
          {messages.map(({ id, user, text, isUser }) => (
            <div
              key={id}
              className={`flex items-start gap-3 ${isUser ? 'justify-end' : ''}`}
            >
              <div className={`flex flex-col gap-1 ${isUser ? 'items-end' : ''}`}>
                <p className="text-sm text-white/70">{user}</p>
                <div
                  className={`px-4 py-2 rounded-2xl text-white shadow ${isUser ? '' : 'bg-white/10'}`}
                >
                  {text}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      
}

export default ChatArea
