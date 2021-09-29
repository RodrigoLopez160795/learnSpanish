import React from 'react'
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <Link to='/' className="anchor">
        <button className="homeButton__main">
            <i className="fa fa-arrow-left fa-lg" style={{ color: "white" }}></i>
            <span>Return</span>
        </button>
        </Link>
    )
}

export default HomeButton;
