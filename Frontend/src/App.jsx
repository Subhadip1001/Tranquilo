import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import All from './Components/All'
import Feedback from './Components/Feedback'
import Chat from './Components/Chat'
import { Toaster } from "react-hot-toast";
import { useAuth } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useAuth();
  console.log(user);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path='/chat' element={user ? <Chat/> : <Navigate to="/login"/>} />
      </Routes>
    </div>
  )
}

export default App
