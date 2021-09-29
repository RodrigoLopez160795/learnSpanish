import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import InitalScreen from "../components/InitalScreen";
import Help from "../components/menuComponents/Help";
import Profile from "../components/menuComponents/Profile";
import { SearchContext } from "../helpers/context/SearchContext";
import AuthRouter from "./AuthRouter";
import CoursesRouter from "./CoursesRouter";
import LearnMoreRouter from "./LearnMoreRouter";
const AppRouter = () => {
    // const [search, setSearch] = useState(true);
  return (
    <Router>
      <div>
        <Switch>
          {/* <SearchContext.Provider value={{search,setSearch}}> */}
            <Route exact path="/" component={InitalScreen} />
          {/* </SearchContext.Provider> */}
          <Route path="/auth" component={AuthRouter} />
          <Route path="/learnMore" component={LearnMoreRouter} />
          <Route path="/profile" component={Profile} />
          <Route path="/help" component={Help} />
          <Route path="/courses" component={CoursesRouter} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
