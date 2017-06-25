import axios from 'axios';

export const fetchParkSuccess = parks => ({
    type: 'fetchParkSuccess',
    parks: parks
})

const fetchPark = (lat, long) => (dispatch) => {
	const location = `location=${lat},${long}&`;
	const radius = `radius=1500&`;
	const type = 'keyword=park&'
	const key = 'key=AIzaSyCrHLg2fo1NEGcMYI_wt7fugERIk9TrmUQ&'
	const url ='https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
	axios.get('https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.523062,-122.676482&radius=500&keyword=park&key=AIzaSyCrHLg2fo1NEGcMYI_wt7fugERIk9TrmUQ')
		.then((response) => {
			dispatch(fetchParkSuccess(response.data.results))
			console.log(response.data.results)
		}).catch((error) => {

		});
}


export default fetchPark;

