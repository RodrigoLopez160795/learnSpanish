import React from 'react';
import { NavLink } from "react-router-dom";
const NavCourses = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark profile__navbar">
        <div className="container-fluid">
          <span className="navbar-brand" >Learn Spanish</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact activeClassName="active" className="nav-link " aria-current="page" >Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavCourses;
