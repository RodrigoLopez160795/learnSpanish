import React from 'react';
import PropTypes from 'prop-types';
import messageStatus from '../../helpers/messageStatus';
const Message = (props) => {
    return (
        <div className="submit__boxMessage">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <img src={messageStatus.failed} alt="Successful"/>
        </div>
    )
}
Message.propTypes={
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }


export default Message;
