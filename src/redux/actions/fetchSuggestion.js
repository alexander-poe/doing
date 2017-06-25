import axios from 'axios';

export const fetchSuggestionSuccess = suggestion => {
    return {
    	type: 'fetchSuggestionSuccess',
    	parks: suggestion
    }
}

const fetchSuggestion = (collection) => (dispatch) => {
	dispatch(fetchSuggestionSuccess(collection[Math.floor(Math.random()* collection.length)]))
};




export default fetchSuggestion;

