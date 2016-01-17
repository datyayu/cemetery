import React, { PropTypes } from 'react';


const Message = ({userName, text}) =>
  <li>
    <strong> @{userName} </strong> : <em> {text} </em>
  </li>
;

Message.propTypes = {
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default Message;
