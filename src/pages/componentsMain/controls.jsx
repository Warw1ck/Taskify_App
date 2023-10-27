import { useContext } from "react"
import AuthContext from "../../context/AutContext"

export function MakeControls(){
    const {deleteAllNote, setFilter, nameFilter } = useContext(AuthContext)
    return(
        <>
            <div className="controls">
                <div className="filters">
                    <span className={nameFilter===null && 'active-filter'} id="all" onClick={(e)=> setFilter(null)}>All</span>
                    <span className={nameFilter===false && 'active-filter'} id="pending" onClick={(e)=> setFilter(false)}>Pending</span>
                    <span className={nameFilter===true && 'active-filter'} id="completed" onClick={(e)=> setFilter(true)}>Completed</span>
                </div>
                <button className="clear-btn" onClick={(e)=>deleteAllNote()}>Clear All</button>
            </div>
        </>
    )
}