import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as chatActions from './actions/chatActions';

import MessagesList from './components/MessageList';
import ChatInput from './components/ChatInput';

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.chatActions.fetchMessages();
  }

  render() {
    const {messages, inputContent, chatActions} = this.props;

    return (
      <div>
        <h1> Messages </h1>
        <ChatInput inputContent={inputContent}
          onInputChange={chatActions.inputChange}
          onInputSubmit={chatActions.submitInput} />
        <MessagesList messages={messages} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    inputContent: state.inputContent,
  };
}

function mapActionsToProps(dispatch) {
  return { chatActions: bindActionCreators(chatActions, dispatch) };
}


export default connect(mapStateToProps, mapActionsToProps)(AppContainer);
