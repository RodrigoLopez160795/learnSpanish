import React, { useState } from "react";
import Footer from "../hero/Footer";
import NavProfile from "./NavProfile";
import ProfileForm from "./ProfileForm";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
  const [profile, setProfile] = useState(true);
  const [picture, setPicture] = useState(false);
  return (
    <div>
      <NavProfile
        handleProfileClick={() => {
          setProfile(true);
          setPicture(false);
        }}
        handlePictureClick={() => {
          setPicture(true);
          setProfile(false);
        }}
      />
      <h3 className="profile__title">{profile?'Profile':'Profile Picture'}</h3>
      {profile && <ProfileForm />}
      {picture && <ProfilePicture />}
      <Footer />
    </div>
  );
};

export default Profile;
