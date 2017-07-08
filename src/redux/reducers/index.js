import { combineReducers } from 'redux';
import parks from './handleParks';
import suggestion from './handleSuggestion';
import bars from './handleBars';
import location from './handleLocation';
import restaurants from './handleRestaurants';
import handleConfig from './handleConfig';


export default combineReducers({
  parks,
  suggestion,
  bars,
  location,
  restaurants,
  handleConfig,
});
