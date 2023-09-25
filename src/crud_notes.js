export async function listNodes(){
    const response = await fetch("http://127.0.0.1:8000/api/todos/notes/");
    const notes = await response.json();
    return notes
    
}

export async function createNote(text){
    const data = {
      task_name: text,
      status: false,
    };
    const response = await fetch("http://127.0.0.1:8000/api/todos/notes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    const notes = await response.json();
    return notes
    
}

export async function changeNoteStatus(status, id){
    	console.log(status)
      console.log(id)

    const data = {
      status: status,
      };
    const response = await fetch(`http://127.0.0.1:8000/api/todos/notes/${id}/`, {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    const notes = await response.json();
    return notes
    
}


export async function deleteNote(id){
    const response = await fetch(`http://127.0.0.1:8000/api/todos/notes/${id}`, {
        method: "Delete",
      });
    

    }
  
