import React, { useEffect, useRef } from 'react'
import { useChatbot } from '../config/context'
import Welcome from './Welcome'

const ChatArea = () => {
  const { activeConversation, loading } = useChatbot();
  const messages = activeConversation?.messages || [];
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!messages.length) {
    return <Welcome />;
  }

  return (
    <div className="gap-4 p-3 rounded-xl pb-28 overflow-y-auto" style={{height: '100%'}}>
      {messages.map(({ id, user, text, isUser }, idx) => (
        <div
          key={id || idx}
          className={`flex items-start gap-3 ${isUser ? 'justify-end' : ''}`}
        >
          <div className={`flex flex-col gap-1 ${isUser ? 'items-end' : ''}`}>
            <p className="text-sm pr-3 mt-3 text-white/70">{user}</p>
            <div
              className={`px-4 py-2 rounded-2xl text-white shadow ${isUser ? '' : 'bg-white/10'}`}
            >
              {text}
            </div>
          </div>
        </div>
      ))}
      {loading && (
        <div className="flex items-start gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-white/70">Bot</p>
            <div className="px-4 py-2 text-white">
              Thinking...
            </div>
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatArea
