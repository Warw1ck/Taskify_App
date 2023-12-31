import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainToDo/MainToDoPage'
import LoginPage from './pages/Login/LoginPage'
import { AuthProvider } from './context/AuthContext'
import {LoginWrapper} from './utils/LoginWrapper'
import {PrivateWrapper} from './utils/PrivateRoutes'
import RegisterPage from './pages/Register/RegisterPage'
import ProfilePage from './pages/Profile/ProfilePage'
import ProfileEdit from './pages/Profile/ProfileEdit/ProfileEdit'


function App() {
  
 
  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route element={<LoginWrapper/>}>
            <Route element={<LoginPage/>} path='/login'/>
            <Route element={<RegisterPage/>} path='/register'/>  
          </Route>
          
          <Route element={<PrivateWrapper/>}>
          <Route element={<ProfilePage/>} path='/profile'/>
          <Route element={<ProfileEdit/>} path='/profile/edit'/>


            <Route element={<MainPage/>} path='/'/>
          </Route>
        </Routes>
         
      </AuthProvider>

    </Router>
      
  )
}

export default App
