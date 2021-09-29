import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavProfile = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark profile__navbar">
      <div className="container-fluid">
        <span className="navbar-brand">Learn Spanish</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Options
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li onClick={props.handleProfileClick}>
                  <span className="dropdown-item pointer">Profile</span>
                </li>
                <li onClick={props.handlePictureClick}>
                  <span className="dropdown-item pointer">Profile picture</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavProfile.propTypes = {
  handleProfileClick: PropTypes.func.isRequired,
  handlePictureClick: PropTypes.func.isRequired,
};
export default NavProfile;
