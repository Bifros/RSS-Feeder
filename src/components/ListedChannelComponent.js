import React from 'react';

const ListedChannelComponent = (props) => (
  <a className="sidebar-item" onClick={props.getChannelFeeds}>
    {props.name}
  </a>
);

export default ListedChannelComponent;