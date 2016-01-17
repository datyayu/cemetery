import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './container';
import store from './store';

var appRootElement = document.createElement('div');
document.body.appendChild(appRootElement);


render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  appRootElement
);
