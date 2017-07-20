import axios from 'axios';

export const fetchReviewsSuccess = reviews => ({
  type: 'fetchReviewsSuccess',
  reviews,
});

export default id => (dispatch) => {
  const key = `&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const CORS = 'https://crossorigin.me/';
  const placeRef = `placeid=${id}`;
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/details/json?';
  axios.get(`${CORS}${baseUrl}${placeRef}${key}`)
    .then((reviews) => {
      console.log(reviews, 'response reviews');
      dispatch(fetchReviewsSuccess(reviews));
      return reviews;
    })
    .catch((error) => {
      console.error('Request unsuccessful', error);
    });
};
