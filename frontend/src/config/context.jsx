import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ChatbotContext = createContext();

function getInitialConversations() {
  const saved = localStorage.getItem('chat-conversations');
  if (saved) return JSON.parse(saved);
  // Start with one default conversation
  return [{
    id: Date.now().toString(),
    title: 'New Conversation',
    messages: []
  }];
}

export const ChatbotProvider = ({ children }) => {
  const [conversations, setConversations] = useState(getInitialConversations);
  const [activeId, setActiveId] = useState(conversations[0]?.id);

  useEffect(() => {
    localStorage.setItem('chat-conversations', JSON.stringify(conversations));
  }, [conversations]);

  // Get the active conversation
  const activeConversation = conversations.find(c => c.id === activeId);

  // Add a message to the active conversation
  const addMessage = async (message) => {
    setConversations(convs =>
      convs.map(c =>
        c.id === activeId
          ? { ...c, messages: [...c.messages, message] }
          : c
      )
    );

    // Auto-generate title after 2+ messages if still default
    setTimeout(async () => {
      const conv = conversations.find(c => c.id === activeId);
      if (!conv) return;
      const msgs = (conv.messages || []).concat(message);
      if (conv.title === 'New Conversation' && msgs.length >= 4) {
        try {
          const openAIMessages = msgs.map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text,
          }));
          const res = await axios.post('http://localhost:5001/summarize', { messages: openAIMessages });
          const newTitle = res.data.title;
          setConversations(convs =>
            convs.map(c => c.id === activeId ? { ...c, title: newTitle } : c)
          );
        } catch (err) {
          // ignore error
        }
      }
    }, 0);
  };

  // Create a new conversation
  const createConversation = (title = 'New Conversation', initialMessage = null) => {
    const newConv = {
      id: Date.now().toString(),
      title,
      messages: initialMessage ? [initialMessage] : []
    };
    setConversations(convs => [newConv, ...convs]);
    setActiveId(newConv.id);
  };

  // Delete a conversation
  const deleteConversation = (id) => {
    setConversations(convs => convs.filter(c => c.id !== id));
    // If deleting the active, switch to another
    if (id === activeId && conversations.length > 1) {
      setActiveId(conversations.find(c => c.id !== id)?.id);
    }
  };

  // For OpenAI API
  const getOpenAIMessages = () => {
    return (activeConversation?.messages || []).map((msg) => ({
      role: msg.isUser ? 'user' : 'assistant',
      content: msg.text,
    }));
  };

  return (
    <ChatbotContext.Provider value={{
      conversations,
      activeId,
      setActiveId,
      activeConversation,
      addMessage,
      createConversation,
      deleteConversation,
      getOpenAIMessages
    }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => useContext(ChatbotContext); 