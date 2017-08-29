import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LayoutComponent from './LayoutComponent';
import SearchContainer from '../search/SearchContainer';
import ListedChannelComponent from '../ListedChannelComponent';

import * as channelsActions from '../../actions/channelsActions';

@connect(
  (store) => ({
    channels: store.channels || []
  }),
  (dispatch) => ({
    actions: bindActionCreators(channelsActions, dispatch)
  })
)
export default class LayoutContainer extends React.Component {

  componentWillMount() {
    this.props.actions.fetchSavedChannels();
  }

  render() {
    return (
      <LayoutComponent
        children={this.props.children}
        renderChannelsList={this.renderChannelsList.bind(this)}
        renderSearchBar={this.renderSearchBar.bind(this)}
      />
    );
  }

  renderChannelsList() {
    return this.props.channels.subscribed.map((channel) => 
      <ListedChannelComponent
        {...channel}
        getChannelFeeds={() => this.getChannelFeeds(channel.link)}
      />
    );
  }

  getChannelFeeds(channelLink) {
    this.props.actions.fetchChannelFeeds(channelLink);
  }

  renderSearchBar() {
    return (
      <SearchContainer />
    );
  }

}