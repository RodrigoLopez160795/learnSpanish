import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Login from "../../images/loginIcon.svg";
import ProfileButton from "./ProfileButton";
const Navbar = () => {
  return (
    <div className="navbar__main">
      <Logo />
      <Link to="/search" className="anchor  searchButton">
      <button className="navbar__button buttonWidth ">
        
      <i className="fa fa-arrow-right"></i>
          <span>Search a course</span>
        
      </button>
      </Link>

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
        <ProfileButton />
      </div>
    </div>
  );
};

export default Navbar;
