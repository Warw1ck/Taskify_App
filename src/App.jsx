import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainToDoPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AutContext'
import {LoginWrapper} from './utils/LoginWrapper'
import {PrivateWrapper} from './utils/PrivateRoutes'


function App() {
  
 
  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route element={<LoginWrapper/>}>
            <Route element={<LoginPage/>} path='/login'/>
          </Route>
          
          <Route element={<PrivateWrapper/>}>
            <Route element={<MainPage/>} path='/'/>
          </Route>
          
        </Routes>
       
      </AuthProvider>
    </Router>
      
  )
}

export default App
