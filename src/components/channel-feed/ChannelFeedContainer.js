import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ChannelFeedComponent from './ChannelFeedComponent';
import ArticlePreviewContainer from '../article-preview/ArticlePreviewContainer';

import * as channelsActions from '../../actions/channelsActions';

@connect(
  (store) => ({
    channels: store.channels || []
  }),
  (dispatch) => ({
    actions: bindActionCreators(channelsActions, dispatch)
  })
)
export default class ChannelFeedContainer extends React.Component {

  render() {
    const activeChannel = this.getActiveChannel();
    if (activeChannel)
      return (
        <ChannelFeedComponent 
          activeChannel={this.getActiveChannel.bind(this)}
          renderChannelFeed={this.renderChannelFeed.bind(this)}
        />
      )
    else
      return (
        <div>
          {'Loading'}
        </div>
      );
  }

  getActiveChannel() {
    const urlParams = this.props.params;

    return (urlParams.channelType == 'unsubscribed') ?
      this.props.channels.unsubscribed[urlParams.index] :
      this.props.channels.subscribed[urlParams.index];
  }

  renderChannelFeed() {
    const feed = this.getActiveChannel();

    if (feed)
      return feed.entries.map((article) =>
        <ArticlePreviewContainer
          article={article}
        />
      ); 
    else
      return (
        <div>
          {'Loading'}
        </div>
      )     
  }

}