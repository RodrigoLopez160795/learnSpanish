import React from 'react';
import { Link } from 'react-router-dom';
const ReturnButton = () => {
    return (
        <Link to='/courses/myCourses' className="anchor button__anchor">
        <button className="homeButton__main">
            <i className="fa fa-arrow-left fa-lg" style={{ color: "white" }}></i>
            <span>Go to my courses</span>
        </button>
        </Link>
    )
}

export default ReturnButton
