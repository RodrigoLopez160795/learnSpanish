import React from "react";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import Logo from "./Logo";
import Login from "../../images/loginIcon.svg";
import ProfileButton from "./ProfileButton";
const Navbar = (props) => {
  return (
    <div className="navbar__main">
      <Logo />
      <InputSearch />
      <div className="navbar__log">
        {/* <button className="navbar__button pointer">
          <Link to="/auth/login" className="anchor">
            <img src={Login} alt="Login Icon" />
            <span>Login</span>
          </Link>
        </button>
        <button className="navbar__button pointer">
          <Link to="/auth/register" className="anchor">
            <i className="fa fa-database" style={{ color: "white" }}></i>
            <span>Create new account</span>
          </Link>
        </button> */}
        <ProfileButton/>
      </div>
    </div>
  );
};

export default Navbar;
