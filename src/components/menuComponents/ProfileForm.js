import React from "react";

const ProfileForm = () => {
  return (
    <form>
      <div className="profileforms__row">
        <div className="profileforms__input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className="profileforms__input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="profileforms__row">
        <div className="profileforms__input">
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your userName"
          />
        </div>
        <div className="profileforms__input">
          <label htmlFor="nativeLanguage">Native language</label>
          <input
            type="text"
            name="nativeLanguage"
            placeholder="Enter your native "
          />
        </div>
      </div>
      <div className="profileforms__biography">
        <label htmlFor="biography">Interests</label>
        <textarea className="profileforms__textArea" placeholder="Tell us something about you"></textarea>
      </div>
      <button className="navbar__button profileforms__button">Save</button>
    </form>
  );
};

export default ProfileForm;
