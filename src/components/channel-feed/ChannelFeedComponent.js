import React from 'react';

const ChannelFeedComponent = (props) => (
  <div>
    <div className="channel-title">
      {props.activeChannel().title} 
      <span className="channel-desc">
        {props.activeChannel().description}
      </span>
    </div>
    <div className="feeds-holder">
      {props.renderChannelFeed()}
    </div>
  </div>
);

export default ChannelFeedComponent;