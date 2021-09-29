import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const ProfileButton = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="navbar__dropDownMenu">
        <button
          className="navbar__button"
          onClick={handleClick}
        >
          <i className="fa fa-wrench fa-lg"></i>
        </button>
        {open && <DropdownMenu />}
      </div>
    </>
  );
};

export default ProfileButton;
