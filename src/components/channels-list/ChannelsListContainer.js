import React from 'react';

import ChannelsListComponent from './ChannelsListComponent';

class ChannelsListContainer extends React.Component {

  render() {
    return (
      <ChannelsListComponent 
        renderSavedChannels={this.renderSavedChannels.bind(this)}
      />
    );
  }

  renderSavedChannels() {

  }

}

export default ChannelsListContainer;