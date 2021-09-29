import React from "react";
import courses from "../../helpers/courses";
import Footer from "../hero/Footer";
import Cards from "./courses/Cards";
import NavCourses from "./courses/NavCourses";
const MyCourses = () => {
  return (
    <>
      <NavCourses />
      <div className="Mycourses__coursesContainer">
        {courses.map((value) => (
          <Cards
            key={value.id}
            title={value.title}
            author={value.author}
            video={value.video}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default MyCourses;

//Video 225 udemy para el map de las cards
