import React from "react";
import Footer from "../../hero/Footer";
import ReturnButton from "./ReturnButton";
import { useParams } from "react-router";
import { getVideoByTitle } from "../../../helpers/getVideoByTitle";


const CourseInfo = () => {
    const {title}=useParams();
    const course = getVideoByTitle(title);

  return (
    <>
      <div className="courses__coursesInfo">
        <p id="title">{course.title}</p>
        <iframe
          width="630"
          height="450"
          src={course.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p id="author">{course.author}</p>
        <div className="course__about">
        <span>About this course:</span>
        <br/>
        <span>This video was taken from Youtube in this source {course.source}</span>
        </div>
        <h3>Comments</h3>
        <textarea
          className="courses__textArea"
          placeholder="Your comment about this course"
        ></textarea>
      </div>
      <ReturnButton />
      <Footer />
    </>
  );
};


export default CourseInfo;
