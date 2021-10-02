import React, { useState } from "react";
import HomeButton from "../auth/HomeButton";
import Footer from "../hero/Footer";
import Message from "../submit/Message";

const Help = () => {
  const [message, setMessage] = useState(false);
  const [complain, setComplain] = useState(true);
  const handleClick = () => {
    setMessage(true);
    setComplain(false);
  };
  return (
    <div>
      {complain && (
        <form className="help__box">
          <label htmlFor="help">¿How can we help you?</label>
          <textarea
            className="help__text"
            placeholder="Tell us your problem and we'll contact with you"
          ></textarea>
          <button className="navbar__button " type="submit" onClick={handleClick}>
            Send
          </button>
        </form>
      )}
      {message && (
        <Message
          title="We recieved your complain."
          text="We'll comunicate with you as soon as we can.Thank you for your patient."
          handleClick={()=>{setMessage(false);setComplain(true);}}
          status={true}
        />
      )}
      {complain && <HomeButton />}

      <Footer />
    </div>
  );
};

export default Help;
