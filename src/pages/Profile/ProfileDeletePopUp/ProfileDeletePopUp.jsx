import "./ProfileDeletePopUp.css";

const ProfileDeletePopUp = ({setVisibleDeleteForm}) => {
  return (
    <>
      <div className={'cd-popup is-visible'} role="alert">
        <div className="cd-popup-container">
          <p>Are you sure you want to delete this element?</p>
          <ul className="cd-buttons">
            <li>
              <a href="#0">Yes</a>
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