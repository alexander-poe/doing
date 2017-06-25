import axios from 'axios';
import fetchSuggestion from './fetchSuggestion';

export const fetchBarSuccess = bars => ({
  type: 'SET_BARS',
  bars,
});

export default (lat, long) => (dispatch) => {
  const key = `&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const location = `location=${lat},${long}`;
  const radius = '&radius=1500';
  const type = '&type=night_club';
  const CORS = 'https://crossorigin.me/';
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

  const req = {
    method: 'get',
    url: `${CORS}${baseUrl}${location}${key}${radius}${type}`,
  };

  axios(req)
    .then((res) => {
      dispatch(fetchBarSuccess(res.data.results));
      return res.data.results;
    })
    .then(suggestions => dispatch(fetchSuggestion(suggestions)))
    .catch((err) => {
      console.error('Request unsuccessful', err);
    });
};
