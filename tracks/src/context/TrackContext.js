import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';


//THIS is a little context provider for grabbing the list of tracks

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
        //return just what we got from our API
      return action.payload;
    default:
      return state;
  }
};

//type/payload

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);