import * as action from '../actions/fetchPark.js';


const initState = {
	parks: [],
	loading: true
};

const handleParks = (state = initState, action) => {
	if (action.type === 'fetchParkSuccess') {
		console.log('fetchParkSuccess: ', action.parks)
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
