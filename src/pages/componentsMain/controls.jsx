import { useContext } from "react"
import AuthContext from "../../context/AutContext"

export function MakeControls(){
    const {deleteAllNote, setFilter } = useContext(AuthContext)
    return(
        <>
            <div className="controls">
                <div className="filters">
                    <span className="active" id="all" onClick={(e)=> setFilter('All')}>All</span>
                    <span id="pending" onClick={(e)=> setFilter('Pending')}>Pending</span>
                    <span id="completed" onClick={(e)=> setFilter('Completed')}>Completed</span>
                </div>
                <button className="clear-btn" onClick={(e)=>deleteAllNote()}>Clear All</button>
            </div>
        </>
    )
}