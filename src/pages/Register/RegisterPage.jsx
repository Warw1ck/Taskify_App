import { useContext } from "react";
import "./main.css";
import AuthContext from "../../context/AutContext";
const RegisterPage = () => {
  const { registerUser, wrongRegisterForm } = useContext(AuthContext);
  return (
    <div className="page-wrapper bg-gra-02  font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            {wrongRegisterForm && <p className="formError">You made mistake in the form!</p>}
            <form onSubmit={registerUser}>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">first name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="firstName"
                    />
                  </div>
                </div>
                <div class="col-2">
                  <div class="input-group">
                    <label class="label">last name</label>
                    <input class="input--style-4" type="text" name="lastName" />
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-2">
                  <div class="input-group">
                    <label class="label">Birthday</label>
                    <div class="input-group-icon">
                      <input
                        class="input--style-4 js-datepicker"
                        type="date"
                        name="birthday"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="input-group">
                    <label class="label">Gender</label>
                    <div class="p-t-10">
                      <label class="radio-container m-r-45">
                        Male
                        <input
                          type="radio"
                          checked="checked"
                          name="gender"
                          value={"M"}
                        />
                        <span class="checkmark"></span>
                      </label>
                      <label class="radio-container">
                        Female
                        <input type="radio" name="gender" value={"F"} />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-2">
                  <div class="input-group">
                    <label class="label">Email</label>
                    <input class="input--style-4" type="email" name="email" />
                  </div>
                </div>
                <div class="col-2">
                  <div class="input-group">
                    <label class="label">Profile Picture URL</label>
                    <input class="input--style-4" type="text" name="profileImage" />
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-2">
                  <div class="input-group">
                    <label class="label">Password</label>
                    <input class="input--style-4" type="text" name="password" />
                  </div>
                </div>

                <div class="col-2">
                  <div class="input-group">
                    <label class="label">Repeat Password</label>
                    <input
                      class="input--style-4"
                      type="text"
                      name="repeatPassword"
                    />
                  </div>
                </div>
              </div>

              <div class="p-t-15">
                <button class="btn btn--radius-2 btn--blue" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
