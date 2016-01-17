import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chatReducer from './reducers/chatReducer';


const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(chatReducer);

export default store;
