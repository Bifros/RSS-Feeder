import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import LayoutContainer from './components/layout/LayoutContainer';
import ChannelsListContainer from './components/channels-list/ChannelsListContainer';
import ChannelFeedContainer from './components/channel-feed/ChannelFeedContainer';
import store from './store';

require('./styles/styles.scss');

const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={LayoutContainer}>
        <Route path="/" component={ChannelsListContainer} />
        <Route path="/view/:channelType/:index" component={ChannelFeedContainer} />
      </Route>
    </Router>
  </Provider>
); 

render(router, document.getElementById('app'));