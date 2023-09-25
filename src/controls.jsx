
export function MakeControls({newTaskFilterName, deleteAllToDoS}){
    return(
        <>
            <div className="controls">
                <div className="filters">
                    <span className="active" id="all" onClick={(e)=> newTaskFilterName('All')}>All</span>
                    <span id="pending" onClick={(e)=> newTaskFilterName('Pending')}>Pending</span>
                    <span id="completed" onClick={(e)=> newTaskFilterName('Completed')}>Completed</span>
                </div>
                <button className="clear-btn" onClick={(e)=>deleteAllToDoS()}>Clear All</button>
            </div>
        </>
    )
}