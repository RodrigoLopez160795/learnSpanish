import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CourseInfo from "../components/menuComponents/courses/CourseInfo";
import MyCourses from "../components/menuComponents/MyCourses";

const CoursesRouter = () => {

  return (

      <Switch>
        <Route path="/courses/myCourses" component={MyCourses} />
        <Route path="/courses/:title" component={CourseInfo} />
        <Redirect to="/courses/myCourses" />
      </Switch>
  );
};

export default CoursesRouter;
