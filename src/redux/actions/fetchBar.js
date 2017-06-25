import axios from 'axios';
import fetchSuggestion from './fetchSuggestion';
import formatData from './formatData';

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
    .then(res => formatData(res.data.results))
    .then((formattedData) => {
      dispatch(fetchBarSuccess(formattedData));
      return formattedData;
    })
    .then(suggestions => dispatch(fetchSuggestion(suggestions)))
    .catch((err) => {
      console.error('Request unsuccessful', err);
    });
};
