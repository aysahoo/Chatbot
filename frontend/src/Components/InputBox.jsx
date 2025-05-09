import React, { useState } from 'react'
import { Focus, SendHorizonal, AudioLines } from 'lucide-react'
import AudioInput from './AudioInput'
import { useChatbot } from '../config/context'
import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const InputBox = () => {
  const [input, setInput] = useState('');
  const { addMessage, getOpenAIMessages, activeConversation, createConversation, loading, setLoading } = useChatbot();
  const MAX_LENGTH = 100;

  const handleInputChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setInput(e.target.value);
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return;
    if (!activeConversation) {
      const userMessage = {
        user: 'You',
        text: input,
        isUser: true,
        id: Date.now() + '-user',
      };
      createConversation('New Conversation', userMessage);
      setInput('');
      setLoading(true);
      try {
        const response = await axios.post(
          `${BACKEND_URL}/chat`,
          {
            messages: [
              { role: 'user', content: userMessage.text },
            ],
          }
        );
        const assistantText = response.data.reply;
        // Wait a tick for the conversation to be set as active
        setTimeout(() => {
          addMessage({
            user: 'Bot',
            text: assistantText,
            isUser: false,
            id: Date.now() + '-bot',
          });
        }, 0);
      } catch (err) {
        setTimeout(() => {
          addMessage({
            user: 'Bot',
            text: 'Sorry, there was an error connecting to the server.',
            isUser: false,
            id: Date.now() + '-error',
          });
        }, 0);
      } finally {
        setLoading(false);
      }
      return;
    }
    // Now safe to proceed
    const userMessage = {
      user: 'You',
      text: input,
      isUser: true,
      id: Date.now() + '-user',
    };
    addMessage(userMessage);
    setInput('');
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/chat`,
        {
          messages: [
            ...getOpenAIMessages(),
            { role: 'user', content: userMessage.text },
          ],
        }
      );
      const assistantText = response.data.reply;
      addMessage({
        user: 'Bot',
        text: assistantText,
        isUser: false,
        id: Date.now() + '-bot',
      });
    } catch (err) {
      addMessage({
        user: 'Bot',
        text: 'Sorry, there was an error connecting to the server.',
        isUser: false,
        id: Date.now() + '-error',
      });
    } finally {
      setLoading(false);
    }
  };

  // Handler for speech-to-text result
  const handleSpeechResult = (transcript) => {
    setInput(transcript);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-0 max-w-[600px] left-0  sm:left-1/2 sm:-translate-x-1/2 right-0 m-4 mb-6 h-16 flex items-center rounded-full bg-white/10 backdrop-blur-xl pl-4 pr-3">
      <button className="h-10 w-10 flex items-center justify-center text-white text-sm">
        <Focus />
      </button>
      <input
        type="text"
        placeholder={loading ? 'Waiting for response...' : 'Type your message...'}
        className="flex-1 bg-transparent text-white placeholder-white/70 p-3 focus:outline-none"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={loading}
        maxLength={MAX_LENGTH}
      />
      <span className="text-xs text-white/60 ml-2 w-16 text-right font-sans font-light select-none">{input.length}/{MAX_LENGTH}</span>
      <div className="h-10 w-10 flex items-center justify-center text-white transition text-sm">
        {input && !loading
          ? <button onClick={sendMessage}><SendHorizonal /></button>
          : <AudioInput onResult={handleSpeechResult} />
        }
      </div>
    </div>
  )
}

export default InputBox