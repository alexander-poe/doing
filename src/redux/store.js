import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDev } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
);