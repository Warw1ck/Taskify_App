import { useContext, useEffect, useState } from 'react'
import { MakeListToDoS } from './listToDoS'
import { MakeFormToDo } from './formToDo'
import { MakeControls } from './controls'
import '../../style/css/style.css'
import { Layout } from '../Layout/layout'
import AuthContext from '../../context/AuthContext'


function MainPage() {
 
  return (
    <>
      <div className='wrapper1'>
        <Layout/>
        <div>
          <MakeFormToDo/>      
          <MakeControls/>
          <MakeListToDoS/>
          
        </div>
        
      </div>
    </>
    
  )
}

export default MainPage
