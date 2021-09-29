import React from "react";
import Cards from "./hero/Cards";
import Footer from "./hero/Footer";

import Navbar from "./nav/Navbar";

const InitalScreen = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
};

export default InitalScreen;
