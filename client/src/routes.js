import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import store from './store';
import App from './containers/App';
import Login from './components/login';
import Profile from './components/profile';

const history = syncHistoryWithStore(browserHistory, store);

export default(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="profile" component={Profile} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>
);
