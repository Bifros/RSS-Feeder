import axios from 'axios';

const receiveSaveChannels = (channels) => ({
  type: 'RECEIVE_SAVED_CHANNELS',
  payload: channels
});

export const fetchSavedChannels = () => {
  return (dispatch) => {
    axios.get('/saved/channels').then(
      (response) => {
        console.log('RESPONSE');
        console.log(response);
        dispatch(receiveSaveChannels(response.data))
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

const receiveChannelFeed = (feed) => ({
  type: 'RECEIVE_CHANNEL_FEED',
  payload: feed
});

export const fetchChannelFeed = (url) => {
  return (dispatch) => {
    axios.post('/channel/feeds', {url}).then(
      (response) => {
        dispatch(receiveChannelFeed(response.data.feed));
      },
      (error) => console.log(error)
    )
  }
}