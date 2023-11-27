import { useContext } from "react";
import "./ProfileDeletePopUp.css";
import AuthContext from "../../../context/AuthContext";

const ProfileDeletePopUp = ({setVisibleDeleteForm}) => {
  const {deleteUser} = useContext(AuthContext)
  return (
    <>
      <div className={'cd-popup is-visible'} role="alert">
        <div className="cd-popup-container">
          <p>Are you sure you want to delete your account?</p>
          <ul className="cd-buttons">
            <li>
              <a onClick={deleteUser}>Yes</a>
            </li>
            <li>
              <a onClick={()=>setVisibleDeleteForm(false)}>No</a>
            </li>
          </ul>
          <a onClick={()=>setVisibleDeleteForm(false)} className="cd-popup-close img-replace">
          </a>
        </div>
        {/* <!-- cd-popup-container --> */}
      </div>{" "}
      {/*<!-- cd-popup --> */}
    </>
  );
};

export default ProfileDeletePopUp