import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <div className="MyCourses__card">
      <iframe
        width="380"
        height="300"
        src={props.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="MyCourses__info">
        <span className="MyCourses__cardtitle">{props.title}</span>
        <span className="MyCourses__cardauthor">{props.author}</span>
        <Link to={`/courses/${props.title}`} className="anchor__dark pointer" style={{width:"90px"}}>Go to course</Link>
      </div>
    </div>
  );
};
Cards.propTypes={
  title:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  video:PropTypes.string.isRequired,
}
export default Cards;
