import axios from 'axios';

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
    .then((res) => {
      dispatch(fetchRestaurantSuccess(res.data.results));
    })
    .catch((err) => {
      console.error('Request unsuccessful', err);
    });
};