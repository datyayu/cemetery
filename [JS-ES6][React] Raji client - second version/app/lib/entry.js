import ReactDOM from 'react-dom';
import React from 'react';
import {createHistory} from 'history';
import HotLoaderInjection from 'react-hot-loader/Injection';
import {createRouter} from './routes';
// import {Provider} from 'react-redux';
// import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';


const history = createHistory();

const rootInstance = ReactDOM.render(
  createRouter(history),
  document.getElementById('app')
);


// Hot reloading patch while react-hot-loader updates to react 0.14.x
if (module.hot) {
  HotLoaderInjection.RootInstanceProvider.injectProvider({
    getRootInstances: () => [rootInstance]
  });
}

//  Dev Tools
// Copy this inside the wrapper div to debug redux.
//
// <Provider store={store}>
//   { () => createRouter(history) }
// </Provider>
//
// <DebugPanel top right bottom>
//   <DevTools store={store} monitor={LogMonitor} />
// </DebugPanel>
