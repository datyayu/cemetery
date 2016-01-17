import {
  UPDATE_MESSAGES,
  INPUT_CHANGE,
  INPUT_SUBMITED,
  NEW_MESSAGE,
} from '../constants/actionTypes';


export const updateMessages = (messages) => (
  {
    type: UPDATE_MESSAGES,
    messages: messages.map(({ text, user }) => {
      return {
        text: text,
        userName: user.name,
      };
    }),
  }
);

export const inputValueChange = (inputValue) => (
  {
    type: INPUT_CHANGE,
    inputContent: inputValue,
  }
);

export const inputSubmited = () => (
  { type: INPUT_SUBMITED }
);


export const newMessage = ({text, user}) => (
  {
    type: NEW_MESSAGE,
    message: {
      text: text,
      userName: user.name,
    },
  }
);
