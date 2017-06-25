import * as action from '../actions/fetchSuggestion.js';

const initState = {
	suggestion: []
};

const handleSuggestion = (state = initState, action) => {
	if (action.type === 'fetchSuggestionSuccess') {
		console.log(action.parks, 'handleSuggestion')
		return {
			...state, 
			suggestion: action.parks,
		}
	} else {
		return {
			...state
		}
	}
};

export default handleSuggestion;
