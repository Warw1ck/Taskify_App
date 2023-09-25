import { useEffect, useState } from 'react'
import { MakeListToDoS } from './listToDoS'
import { MakeFormToDo } from './formToDo'
import { MakeControls } from './controls'
import {listNodes, changeNoteStatus, createNote, deleteNote} from './crud_notes'


function App() {
  const [toDoS, setToDoS] = useState([])

  useEffect(()=>{
    listNodes()
    .then((result) => {
      setToDoS(result)
    })
    .catch((error) => {
      console.error(error);
    });
  },[])

  const [taskFilter, setFilter] = useState('All')
  
  function createNewItem(newItem){
    createNote(newItem)
    .then((result) => {
      setToDoS([...toDoS, result])
    })
    .catch((error) => {
      console.error(error);
    });
  };

  function deleteTask(id){
    deleteNote(id)
    setToDoS((toDoS)=>{
      return toDoS.filter(todo => todo.id !== id)  
    })
    
  }
  function completeTask(id, status){
    console.log(status)
    setToDoS((toDoS)=>{
      return toDoS.map((todo)=>{
        
        if(todo.id === id){
          changeNoteStatus(status, id)
          return {...todo, status}
        }
        return todo
      }
      )
    })

  }
  function deleteAllToDoS(){
    toDoS.forEach(element => {
      deleteNote(element.id)
    });
    setToDoS([])
  }
  function changeTaskFilter(newFilter){
    setFilter(newFilter)
  }
 
  return (
    <>
      <MakeFormToDo createNewItem={createNewItem}/>      
      <MakeControls newTaskFilterName={changeTaskFilter} deleteAllToDoS={deleteAllToDoS}/>
      <MakeListToDoS toDoS={toDoS} nameFilter={taskFilter} completeTask={completeTask} deleteTask={deleteTask} />
      
    </>
  )
}

export default App
