import { useState } from "react"
export function MakeFormToDo({createNewItem}){
    const [title, setTaskTitle] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        createNewItem(title)
    }
    return(
        <>
            <form action="submit" className="task-input" onSubmit={handleSubmit}>
                <ion-icon name="create-outline"></ion-icon>
                <input type="text" placeholder="Add a New Task + Enter" value={title} onChange={event => setTaskTitle(event.target.value)} />
                
            </form>        
      
        </>
    )
}