import React from 'react'
import Chat from './Pages/Chat'
import { Route, Routes } from 'react-router-dom'
import History from './Components/History'
import ProfilePage from './Components/ProfilePage'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Chat/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  )
}

export default App
