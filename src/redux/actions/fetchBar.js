import axios from 'axios';

export const fetchBarSuccess = bars => ({
  type: 'SET_BARS',
  bars
});

export const getBar = (lat, long) => (dispatch) => {
  const key = '&key=AIzaSyCrHLg2fo1NEGcMYI_wt7fugERIk9TrmUQ';
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
    })
    .catch((err) => {
      console.error('Request unsuccessful', err);
    });
};
