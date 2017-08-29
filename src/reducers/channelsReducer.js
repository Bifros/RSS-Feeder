export const channelsReducer = (prevState = {}, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {

    case 'RECEIVE_SAVED_CHANNELS': {
      newState.subscribed = action.payload;
      return newState;
    }

    case 'RECEIVE_CHANNEL_FEED': {
      newState.unsubscribed.push(action.payload);
      return newState;
    }

    default: 
      return newState;
  }
}
