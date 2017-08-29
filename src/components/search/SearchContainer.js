import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';

import * as channelsActions from '../../actions/channelsActions';
import SearchComponent from './SearchComponent';

@connect(
  (store) => ({
    channels: store.channels || []
  }),
  (dispatch) => ({
    actions: bindActionCreators(channelsActions, dispatch)
  })
)
export default class SearchContainer extends React.Component {

  componentWillMount() {
    
  }

  render() {
    return (
      <SearchComponent
        getFeed={this.getFeed.bind(this)}
      />
    );
  }

  getFeed() {
    const searchForm = document.forms['search-form'];
    const feedsUrl = searchForm.elements['feed-url'].value;

    this.props.actions.fetchChannelFeed(feedsUrl);
    browserHistory.push(`/view/unsubscribed/${this.props.channels.unsubscribed.length}`);
  }

}