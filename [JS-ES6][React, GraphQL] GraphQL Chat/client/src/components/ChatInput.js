import React, { PropTypes } from 'react';


const ChatInput = ({ inputContent, onInputChange, onInputSubmit }) => (
  <form onSubmit={onInputSubmit}>
    <input
      type="text"
      value={inputContent}
      onChange={onInputChange} />
  </form>
);

ChatInput.propTypes = {
  inputContent: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputSubmit: PropTypes.func.isRequired,
};


export default ChatInput;
