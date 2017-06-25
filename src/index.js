import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import store from './redux/store';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

dotenv.config()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
