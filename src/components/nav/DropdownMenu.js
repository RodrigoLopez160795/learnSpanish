import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="navbar__menu">
      <ul>
        <li>
          <Link to="/profile" className="anchor">
            <div className="navbar__menuItem">
              <i className="fa fa-id-badge"></i>
              <span>Profile</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/courses/myCourses" className="anchor">
            <div className="navbar__menuItem">
              <i className="fa fa-graduation-cap"></i>
              <span>My courses</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/help" className="anchor">
            <div className="navbar__menuItem">
              <i className="fa fa-clipboard-check"></i>
              <span>Help</span>
            </div>
          </Link>
        </li>
        <li>
          <div className="navbar__menuItem">
            <i className="fa fa-door-closed"></i>
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
