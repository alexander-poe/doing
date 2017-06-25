import axios from 'axios';
import fetchSuggestion from './fetchSuggestion';
import formatData from './formatData';

export const fetchParkSuccess = parks => ({
  type: 'fetchParkSuccess',
  parks,
});

export default (lat, long) => (dispatch) => {
  const key = `&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const location = `location=${lat},${long}`;
  const radius = '&radius=1500';
  const type = '&type=park';
  const CORS = 'https://crossorigin.me/';
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  axios.get(`${CORS}${baseUrl}${location}${key}${radius}${type}`)
    .then(res => formatData(res.data.results))
    .then((formattedData) => {
      dispatch(fetchParkSuccess(formattedData));
      return formattedData;
    })
    .then(suggestions => dispatch(fetchSuggestion(suggestions)))
    .catch((error) => {
      console.error('Request unsuccessful', error);
    });
};
