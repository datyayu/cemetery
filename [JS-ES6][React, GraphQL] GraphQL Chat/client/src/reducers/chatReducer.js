import {
  UPDATE_MESSAGES,
  INPUT_CHANGE,
  INPUT_SUBMITED,
  NEW_MESSAGE,
} from '../constants/actionTypes';


const initialState = {
  messages: [],
  inputContent: ''
};

const chatMessages = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case UPDATE_MESSAGES:
      return Object.assign({}, state, {
        messages: action.messages.reverse(),
      });

    case INPUT_CHANGE:
      return Object.assign({}, state, {
        inputContent: action.inputContent,
      });

    case INPUT_SUBMITED:
      return Object.assign({}, state, {
        inputContent: '',
      });

    case NEW_MESSAGE:
      return Object.assign({}, state, {
        messages: [action.message, ...state.messages],
      });

    default:
      return state;
  }
}


export default chatMessages;
