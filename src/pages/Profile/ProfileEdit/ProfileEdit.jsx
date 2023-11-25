import { Layout } from "../../componentsMain/layout";

const ProfileEdit = () => {
  return (
    <>
      <Layout />
      <div className="page-wrapper bg-gra-02  font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title">Profile Edit Form</h2>
              <form>
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
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">last name</label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="lastName"
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
    </>
  );
};

export default ProfileEdit;
