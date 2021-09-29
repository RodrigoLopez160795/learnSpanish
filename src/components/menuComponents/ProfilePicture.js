import React from "react";

const ProfilePicture = () => {
  return (
    <div>
        <span className="profilePicture__title">Preview</span>
      <div className="profilePicture__imageBox">
        <img
          src="https://img-c.udemycdn.com/user/200_H/anonymous_3.png"
          alt="Nothing selected"
          className="profilePicture__image"
        />
      </div>
      <button className="navbar__button profilePicture__upload">
      <i className="fa fa-upload fa-lg pointer"></i>
      </button>
      <button className="navbar__button profileforms__button">Save</button>
    </div>
  );
};

export default ProfilePicture;
