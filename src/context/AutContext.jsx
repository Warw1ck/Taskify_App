import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [nameFilter, setFilter] = useState('All')
  const [notesList, setNotesList] = useState([])
  const [authToken, setToken] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );

//-------------------------------------------------------------------->
  const loginUser = async (e) => {
    e.preventDefault();
    console.log( e.target.username.value,  e.target.password.value)
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setUser(jwt_decode(data.access));
      setToken(data);
      console.log(data)
      listNodes(data.access)
      console.log(notesList)
      localStorage.setItem("authToken", JSON.stringify(data));
      // Display a success message on the UI
    } else {
      // Display an error message on the UI
      alert("Login failed. Please check your credentials.");
    }
  };
//-------------------------------------------------------------------->
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
  };
//-------------------------------------------------------------------->
  const updateToken = async () => {
    console.log(authToken?.refresh)
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refresh: String(authToken?.refresh),
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setUser(jwt_decode(data.access));
      setToken(data);
      
      localStorage.setItem("authToken", JSON.stringify(data));
    } else {
      // Handle token refresh error, e.g., by logging the user out or showing an error message.
    }
    if (loading) {
      setLoading(false);
    }
    console.log(`Print Data from UpdateToken:`);
    console.log(data);
    return data;
  };

//-------------------------------------------------------------------->
  const listNodes = async (token) => {
    const response = await fetch("http://127.0.0.1:8000/api/todos/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const notes = await response.json();
    setNotesList(notes)

  };

//-------------------------------------------------------------------->
  const createNote = async (e) => {
    e.preventDefault()
    const token = await updateToken()

    const data = {
      task_name: e.target.taskName,
      status: false,
    };
    const response = await fetch("http://127.0.0.1:8000/api/todos/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const notes = await response.json();
    setNotesList([...notesList, notes])
    
  };

//-------------------------------------------------------------------->

  const changeNoteStatus = async (e) => {

    const token = await updateToken()
    const status = e.target.checked

    const data = {
      status: status,
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/todos/update/${e.target.dataset.id}/`,
      {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    const notes = await response.json();
    setNotesList(notesList.map(element =>{
      if (element.id === id) {
        return {...element, status:status}
      }
    }
    ))
  };

//-------------------------------------------------------------------->
  const deleteNote = async (id) => {
    const token = await updateToken()
    const response = await fetch(
      `http://127.0.0.1:8000/api/todos/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    setNotesList(notesList.map(element =>{
      if (element.id != id) {
        return element
        
      }
    }
    ))
  };
//-------------------------------------------------------------------->
const deleteAllNote = async () => {
  const token = await updateToken()
  notesList.forEach(element => {
      fetch(
      `http://127.0.0.1:8000/api/todos/delete/${element.id}`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    
  
    });
    setNotesList([])
  }
  

//-------------------------------------------------------------------->
  useState(() => {
    if (loading) {
      updateToken();
    }
  }, [authToken, loading]);

  const context = {
    user: user,
    authToken: authToken,
    notesList: notesList,
    nameFilter: nameFilter,

    setFilter: setFilter,

    loginUser: loginUser,
    logOut: logout,
    updateToken: updateToken,

    changeNoteStatus: changeNoteStatus,
    listNotes: listNodes,
    deleteNote: deleteNote,
    createNote: createNote,
    deleteAllNote: deleteAllNote,

  };

  return (
    <AuthContext.Provider value={context}>
      {loading ? <div className="lds-dual-ring"></div> : children}
    </AuthContext.Provider>
  );
}
