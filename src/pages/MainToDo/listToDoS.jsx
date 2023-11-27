import { useContext } from "react";
import AuthContext from "../../context/AutContext";

export function MakeListToDoS() {
  const { notesList, nameFilter, deleteNote, changeNoteStatus } = useContext(
    AuthContext
  );
  console.log(notesList)

  return (
    <>
      <ul className="task-box">
        {notesList.map((task) => {
          if (nameFilter === null || task.status === nameFilter) {
            return (
              <li className="task" key={task.id}>
                <label htmlFor={task["task_name"]}>
                  <p>
                    {task["task_name"]}
                    <input
                      type="checkbox"
                      data-id={task.id}
                      checked={task.status}
                      onChange={changeNoteStatus}
                    />
                  </p>
                </label>

                <button
                  onClick={(e) => deleteNote(task.id)}
                  className="clear-btn"
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
