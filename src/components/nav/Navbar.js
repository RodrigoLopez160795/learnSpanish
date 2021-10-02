import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Login from "../../images/loginIcon.svg";
import ProfileButton from "./ProfileButton";
const Navbar = () => {
  const [isLoggin, setIsLoggin] = useState(false);
  return (
    <div className="navbar__main">
      <Logo />

      <Link
        to="/search"
        className={isLoggin ? "anchor logginTrue" : "anchor logginFalse"}
      >
        <button className="navbar__searchButton ">
          <i className="fa fa-arrow-right"></i>
          <span>Search a course</span>
        </button>
      </Link>

      <div className={isLoggin ? "navbar__log2" : "navbar__log"}>
        <Link to="/auth/login" className="anchor" id="login">
          <button className="navbar__button2 pointer">
            <img src={Login} alt="Login Icon" />
            <span>Login</span>
          </button>
        </Link>
        <Link to="/auth/register" className="anchor" id="create">
          <button className="navbar__button2 pointer">
            <i className="fa fa-database" style={{ color: "white" }}></i>
            <span>Create new account</span>
          </button>
        </Link>
        {/* <ProfileButton /> */}
      </div>
    </div>
  );
};

export default Navbar;
