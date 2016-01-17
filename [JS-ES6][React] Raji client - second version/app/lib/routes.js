import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import App from './containers/App';
import NowPlaying from './containers/NowPlaying';
import Series from './containers/Series.js';


export const createRouter = (history) =>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={NowPlaying} />
      <Route path="series" component={Series} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
  ;
