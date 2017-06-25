import axios from 'axios';
import fetchSuggestion from './fetchSuggestion';
import formatData from './formatData';

export const fetchRestaurantSuccess = restaurants => ({
  type: 'SET_RESTAURANTS',
  restaurants,
});

export default (lat, long) => (dispatch) => {
  const key = `&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const location = `location=${lat},${long}`;
  const radius = '&radius=1500';
  const type = '&type=restaurant';
  const CORS = 'https://crossorigin.me/';
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

  const req = {
    method: 'get',
    url: `${CORS}${baseUrl}${location}${key}${radius}${type}`,
  };

  axios(req)
    .then(res => formatData(res.data.results))
    .then((formattedData) => {
      dispatch(fetchRestaurantSuccess(formattedData));
      return formattedData;
    })
    .then(suggestions => dispatch(fetchSuggestion(suggestions)))
    .catch((err) => {
      console.error('Request unsuccessful', err);
    });
};
