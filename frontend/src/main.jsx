import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChatbotProvider } from './config/context'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChatbotProvider>
      <App />
    </ChatbotProvider>
  </BrowserRouter>
)
