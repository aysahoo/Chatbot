import React from 'react'
import Chat from './Pages/Chat.jsx'
import Homepage from './Pages/Homepage.jsx'
import { Route, Routes } from 'react-router-dom'
import History from './Components/History.jsx'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/history' element={<History/>}/>
    </Routes>
  )
}

export default App
