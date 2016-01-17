import React, { PropTypes } from 'react';
import Message from './Message';


const MessageList = ({messages}) =>
  <ul>
  {
    messages.map((message, idx) => <Message key={idx} {...message} />)
  }
  </ul>
;

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};


export default MessageList;
