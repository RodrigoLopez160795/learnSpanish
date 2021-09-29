import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Search from "../components/hero/Search";
import InitalScreen from "../components/InitalScreen";
import Help from "../components/menuComponents/Help";
import Profile from "../components/menuComponents/Profile";

import AuthRouter from "./AuthRouter";
import CoursesRouter from "./CoursesRouter";
import LearnMoreRouter from "./LearnMoreRouter";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={InitalScreen} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/learnMore" component={LearnMoreRouter} />
          <Route path="/profile" component={Profile} />
          <Route path="/help" component={Help} />
          <Route path="/courses" component={CoursesRouter} />
          <Route path="/search" component={Search}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
