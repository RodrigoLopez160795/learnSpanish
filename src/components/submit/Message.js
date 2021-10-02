import React from "react";
import PropTypes from "prop-types";
import messageStatus from "../../helpers/messageStatus";
import { Link } from "react-router-dom";
const Message = (props) => {
  const { success, failed } = messageStatus;
  return (
    <div className="submit__boxMessage">
      {console.log(props)}
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <img src={props.status ? success : failed} alt="Successful" />
      <div className="submit__options">
        <span className="anchor__dark pointer" onClick={props.handleClick}>
          Add another complain
        </span>
        <Link to="/" className="anchor__dark">Home</Link>
      </div>
    </div>
  );
};
Message.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  status: PropTypes.bool.isRequired,
};

export default Message;
