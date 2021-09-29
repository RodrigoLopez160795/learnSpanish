import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeButton from "../components/auth/HomeButton";
import Footer from "../components/hero/Footer";
import Card1 from "../components/learnMore/Card1";
import Card2 from "../components/learnMore/Card2";
import Card3 from "../components/learnMore/Card3";
import Card4 from "../components/learnMore/Card4";

const LearnMoreRouter = () => {
  return (
    <>
      <Switch>
        <Route  path='/learnMore/card1' component={Card1} />
        <Route  path='/learnMore/card2' component={Card2} />
        <Route  path='/learnMore/card3' component={Card3} />
        <Route  path='/learnMore/card4' component={Card4} />
        <Redirect to='/' />
      </Switch>
      <HomeButton/>
      <Footer/>
    </>
  );
};

export default LearnMoreRouter;
