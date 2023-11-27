import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({ children }) {
  const url = 'https://todos-main-server.onrender.com'

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);
  const [wrongRegisterForm, setWrongRegisterForm] = useState(false);
  const [wrongLoginForm, setWrongLoginForm] = useState(false);
  const [profile, setProfile] = useState();



  const [nameFilter, setFilter] = useState(null);
  const [notesList, setNotesList] = useState([]);
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
    setWrongLoginForm(false);
    console.log(e.target.email.value, e.target.password.value);
    const response = await fetch(`${url}/api/token/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setUser(jwt_decode(data.access));
      setToken(data);
      console.log("this is the data:");
      console.log(data);
      listNodes(data.access);
      localStorage.setItem("authToken", JSON.stringify(data));
      getUserProfile(data.access)
      // Display a success message on the UI
    } else {
      // Display an error message on the UI
      setWrongLoginForm(true);
    }
  };

  //-------------------------------------------------------------------->
  const registerUser = async (e) => {
    e.preventDefault();
    setWrongRegisterForm(false);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    console.log(e.target.gender.value);
    const formData = {
      email,
      password: password === repeatPassword ? password : undefined,
      userprofile: {
        first_name: e.target.firstName.value,
        last_name: e.target.lastName.value,
        date_of_birth: e.target.birthday.value,
        gender: e.target.gender.value,
        profile_picture: e.target.profileImage.value

      },
    };
    console.log(formData);
    const response = await fetch(`${url}/api/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.status === 201) {
      loginUser(e);
    } else {
      setWrongRegisterForm(true);
    }
  };
  //-------------------------------------------------------------------->
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
  };
    //-------------------------------------------------------------------->

    const getUserProfile = async (token) => {
      const response = await fetch(`${url}/api/profile/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Profile Data:");
      console.log(data);
      setProfile(data);
    };
  //-------------------------------------------------------------------->
  const updateToken = async () => {
    console.log(authToken?.refresh);
    const response = await fetch(`${url}/api/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refresh: String(authToken?.refresh),
      }),
    });
    console.log(response.status);
    if (response.status === 200) {
      console.log("I come hereeee");
      const data = await response.json();
      setUser(jwt_decode(data.access));
      await getUserProfile(data.access)

      setToken({
        refresh: authToken.refresh,
        access: data.access,
      });

      localStorage.setItem(
        "authToken",
        JSON.stringify({
          refresh: authToken.refresh,
          access: data.access,
        })
      );
      setLoading(false);

      return data;
    }
    setLoading(false);
  };

  //-------------------------------------------------------------------->
  const listNodes = async (token) => {
    const response = await fetch(`${url}/api/todos/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const notes = await response.json();
    setNotesList(notes);
  };

  //-------------------------------------------------------------------->
  const createNote = async (e) => {
    e.preventDefault();
    const token = await updateToken();

    const data = {
      task_name: e.target.taskName.value,
      status: false,
      user: user["user_id"],
    };
    console.log(data);
    const response = await fetch(`${url}/api/todos/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify(data),
    });
    const notes = await response.json();
    console.log("Creation Result");
    console.log(notes);
    setNotesList([...notesList, notes]);
  };

  //-------------------------------------------------------------------->

  const changeNoteStatus = async (e) => {
    const token = await updateToken();
    const status = !e.target.checked;
    const id = e.target.dataset.id;
    console.log("Change id and status:");
    console.log(id, status);

    const data = {
      status: status,
    };
    const response = await fetch(
      `${url}/api/todos/${id}/update/`,
      {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
        body: JSON.stringify(data),
      }
    );
    const notes = await response.json();
    setNotesList(
      notesList.map((element) => {
        if (element.id == id) {
          return notes;
        } else {
          return element;
        }
      })
    );
  };

  //-------------------------------------------------------------------->
  const deleteNote = async (id) => {
    const token = await updateToken();
    const response = await fetch(
      `${url}/api/todos/${id}/delete/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
      }
    );
    setNotesList(
      notesList.filter((element) => {
        return element.id != id;
      })
    );
  };
  //-------------------------------------------------------------------->
  const deleteAllNote = async () => {
    const token = await updateToken();
    notesList.forEach((element) => {
      fetch(`${url}/api/todos/${element.id}/delete/`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
      });
    });
    setNotesList([]);
  };


  //-------------------------------------------------------------------->

  const updateUserProfile = async (e) => {
    e.preventDefault();


    const token = await updateToken();

    const formData ={
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      date_of_birth: e.target.birthday.value,
      profile_picture: e.target.profileImage.value,
      gender: profile.gender
      
    };
    const response = await fetch(`${url}/api/profile/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify(formData)
    });
    console.log(response.status)
    if(response.status === 200){
      getUserProfile(token.access)
      navigate('/profile')

    }else{
      alert('Form not Valid!')
    }

  };
  //-------------------------------------------------------------------->
  const deleteUser = async () => {
    const token = await updateToken()
    const response = await fetch(`${url}/api/profile/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
    });
    if(response.status === 204){
      logout()
    }
  };
  //--
  //-------------------------------------------------------------------->



  useState(() => {
    const fetchAllData = async ()=>{
      const token = await updateToken();
      listNodes(token.access);
      console.log(' I comeeeeeeee here')

    }
    
    if (loading) {
      fetchAllData()
    }
  }, [authToken, loading]);

  //-------------------------------------------------------------------->
  const context = {
    user: user,
    profile: profile,
    authToken: authToken,
    notesList: notesList,
    nameFilter: nameFilter,

    setFilter: setFilter,

    updateUserProfile:updateUserProfile,
    deleteUser: deleteUser,

    wrongRegisterForm: wrongRegisterForm,
    registerUser: registerUser,

    wrongLoginForm: wrongLoginForm,
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
      {loading ? (
        <div className="loading-wrapper">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
