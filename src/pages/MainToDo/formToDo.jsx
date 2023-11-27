import { useContext, useState } from "react"
import AuthContext from "../../context/AutContext"
export function MakeFormToDo(){
    const {createNote} = useContext(AuthContext)

    return(
        <>
            <form action="submit" className="task-input" onSubmit={createNote}>
                <ion-icon name="create-outline"></ion-icon>
                <input type="text" name="taskName" placeholder="Add a New Task + Enter"/>
                
            </form>        
      
        </>
    )
}