import { useContext, useEffect, useState } from 'react'
import { MakeListToDoS } from './componentsMain/listToDoS'
import { MakeFormToDo } from './componentsMain//formToDo'
import { MakeControls } from './componentsMain//controls'
import '../style/css/style.css'
import { Layout } from './componentsMain/layout'
import AuthContext from '../context/AutContext'


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
