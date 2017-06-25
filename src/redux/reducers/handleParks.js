import * as action from '../actions/fetchPark.js';

const initState = {
	parks: [],
	loading: true
};

const handleParks = (state = initState, action) => {
	if (action.type === 'fetchParkSuccess') {
		console.log('fetchPark')
		const newData = action.parks.map((park) => {
			return {
				name: park.name,
				rating: park.rating,
				vicinity: park.vicinity
			}
		})
		return {
			...state, 
			parks: newData,
			loading: false
		}
	} else {
		return {
			...state
		}
	}
};

export default handleParks;

//const getPhoto = park.photos[0].photo_reference ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=AIzaSyCrHLg2fo1NEGcMYI_wt7fugERIk9TrmUQ` : 'null'