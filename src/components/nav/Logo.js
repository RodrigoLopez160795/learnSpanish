import React from "react";
import logo from "../../images/logo.png";
const Logo = () => {
  return (
      <div className="navbar__logo ">
        <img src={logo} alt="Logo" />
        <span>Learn Spanish</span>
      </div>
  );
};

export default Logo;
