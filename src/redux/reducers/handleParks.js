import * as action from '../actions/fetchPark.js';

const initState = {
	parks: [],
	loading: false
};

const handleParks = (state = initState, action) => {
	console.log(action,' reducer')
	if (action.type === 'fetchParkSuccess') {
		console.log(action, 'hey')
		return {
			...state,
			loading: true
		} 	
	} else {
		return {
			...state
		}
	}
};

export default handleParks;