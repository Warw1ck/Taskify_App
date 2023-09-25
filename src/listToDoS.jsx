
export function MakeListToDoS({nameFilter, toDoS, completeTask, deleteTask}){
    const typeFilter = {
        'All': toDoS,
        'Completed': toDoS.filter(todo=> todo.status === true),
        'Pending': toDoS.filter(todo=> todo.status === false)

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
                                    <input type="checkbox" checked={task.status} onChange={(e) => completeTask(task.id, e.target.checked)}/>
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