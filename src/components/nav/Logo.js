import React from "react";
import logo from "../../images/logo.png";
const Logo = () => {
  return (
      <div className="navbar__logo ">
        <img src={logo} alt="Logo" />
        <h3>Learn Spanish</h3>
      </div>
  );
};

export default Logo;
