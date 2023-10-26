import { useContext } from "react"
import AuthContext from "../../context/AutContext"

export function MakeListToDoS(){
    const { notesList, nameFilter, deleteTask, changeNoteStatus} = useContext(AuthContext)

    const typeFilter = {
        'All': notesList,
        'Completed': notesList.filter(todo=> todo.status === true),
        'Pending': notesList.filter(todo=> todo.status === false)

    }
    const  showToDoS = typeFilter[nameFilter]
    return(
        <>
            <ul className="task-box">
                {showToDoS.map((task)=>{
                    return (
                    
                        <>
                        <li className="task" key={task.id}>
                            <label htmlFor={task['task_name']}>
                                <p>
                                    {task['task_name']}
                                    <input type="checkbox" data-id={task.id} checked={task.status} onChange={changeNoteStatus}/>
                                </p>
                            </label>
                            
                            <button onClick={()=> deleteTask(task.id)} className="clear-btn">Delete</button>
                        </li>
                        </>
    
                    )
                
                })}
            
            </ul>
        </>
    )
}