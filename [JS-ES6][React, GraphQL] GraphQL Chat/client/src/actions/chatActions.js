import {
  updateMessages,
  inputSubmited,
  inputValueChange,
  newMessage,
} from './chatActionsCreators';


/* Generate a grapql request and return a promise from that request */
const generateGraphQLRequest = (query) => {
  return fetch('/graphql', {
    method: 'POST',
    body: query,
    headers: { 'Content-Type': 'application/graphql' }
  })
};


export function fetchMessages() {
  const graphQLQuery = '{ messages { text, user { name } } }';

  // Request all messages from server.
  return (dispatch) => {
    generateGraphQLRequest(graphQLQuery)
      .then(response => response.json())
      .then(response => {
        if (response.errors) throw new Error(response.errors);

        dispatch(updateMessages(response.data.messages))
      })
      .catch(console.log)
    }
};


export function inputChange(event) {
  event.preventDefault();

  // Get text input value.
  const inputValue = event.target.value;

  // Dispatch the value change.
  return (dispatch) => dispatch(inputValueChange(inputValue))
}


export function submitInput(event) {
  event.preventDefault();

  // Get text input value.
  const inputElement = event.target.children[0];
  const inputValue = inputElement.value.trim();

  // Make sure isn't empty
  if (inputValue === '') return;

  // GraphQL Query to request
  const graphQLQuery = ` mutation {
    createMessage(userId: "569a2df6fb3906833a5829fc", text: "${inputValue}" ) {
      text,
      user { name }
    }
  }`;

  // Post the message to the server and dispatch the new message.
  return (dispatch) => {
    dispatch(inputSubmited());

    generateGraphQLRequest(graphQLQuery)
      .then(response => response.json())
      .then(response => {
        if (response.errors) throw new Error(response.errors);

        dispatch(newMessage(response.data.createMessage))
      })
      .catch(console.log)
  };
}
