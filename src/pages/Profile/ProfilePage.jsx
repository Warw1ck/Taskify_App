import { faBan, faCog, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import ProfileDeletePopUp from "./ProfileDeletePopUp/ProfileDeletePopUp";
import { useContext, useState } from "react";
import { Layout } from "../componentsMain/layout";
import AuthContext from "../../context/AutContext";

const ProfilePage = () => {
  const [visibleDeleteForm, setVisibleDeleteForm] = useState(false);
  const {profile, user} = useContext(AuthContext)
  return (
    <>
      <Layout/>

      {visibleDeleteForm && (
        <ProfileDeletePopUp setVisibleDeleteForm={setVisibleDeleteForm} />
      )}
      
      <div className="profilePage">
        <div className="bg-cover"></div>
        <div className="container">
          <div className="header">
            <Link to={"/profile/edit"}>
              <FontAwesomeIcon className="fa fa-cog" icon={faCog} />
            </Link>
            <FontAwesomeIcon
              onClick={() => setVisibleDeleteForm(true)}
              className="fa fa-cog"
              icon={faBan}
            />
          </div>
          <div className="middle">
            <img
              src={profile['profile_picture']}
              alt=""
              className="user-pic"
            />
            <h4 className="name">{profile['first_name']} {profile['last_name']}</h4>
            <h4 className="work">{user['email']} | {profile['gender']} | {profile['date_of_birth']}</h4>
            {/* <h4 class="social">
            <i class="fa fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <i class="fa fa-dribbble"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <i class="fa fa-twitter"></i>
          </h4> */}
          </div>
          <div className="footer">
            <Link className="btn-follow" to={"/"}>
              check tasks{" "}
            </Link>
            <br />
            <FontAwesomeIcon className="fa fa-lock" icon={faListCheck} /> <br />
            <h4 className="profile-status">
              You can manage all your task with Taskify
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
