import { combineReducers } from 'redux';
import handleParks from './handleParks';
import handleSuggestion from './handleSuggestion';


export default combineReducers({
	handleParks,
	handleSuggestion
});