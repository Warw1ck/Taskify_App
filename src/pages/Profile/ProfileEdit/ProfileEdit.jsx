import { useContext, useState } from "react";
import { Layout } from "../../Layout/layout";
import AuthContext from "../../../context/AuthContext";
import { redirect } from "react-router-dom";

const ProfileEdit = () => {
  const {profile, updateUserProfile} = useContext(AuthContext)
  let [firstName, setFirstName] = useState(profile?.first_name)
  let [lastName, setLastName] = useState(profile?.last_name)
  let [birthday, setBirthday] = useState(profile?.data_of_birth)
  let [profilePicture, setProfilePicture] = useState(profile?.profile_picture)




  return (
    <>
      <Layout />
      {profile?
      <div className="page-wrapper bg-gra-02  font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title">Profile Edit Form</h2>
              <form onSubmit={updateUserProfile}>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">first name</label>
                      <input
                       
                        className="input--style-4"
                        type="text"
                        name="firstName"
                        value={firstName}

                        onChange={(e)=> setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">last name</label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}

                      />
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Birthday</label>
                      <div className="input-group-icon">
                        <input
                          className="input--style-4 js-datepicker"
                          type="date"
                          name="birthday"
                          value={birthday}
                          onChange={(e)=> setBirthday(e.target.value)}

                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Profile Image</label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="profileImage"
                        value={profilePicture}
                        onChange={(e)=> setProfilePicture(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-t-15">
                  <button className="btn btn--radius-2 btn--blue" type="submit">
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      : null 
      
      }
    </>
  );
};

export default ProfileEdit;
