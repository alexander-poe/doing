import { connect } from 'react-redux';
import Buttons from '../components/Buttons/Buttons';

import getBar from '../redux/actions/fetchBar';
import getRestaurant from '../redux/actions/fetchRestaurant';
import fetchPark from '../redux/actions/fetchPark';
import configSettings from '../redux/actions/configSettings';
import fetchReviews from '../redux/actions/fetchReviews';

const mapStateToProps = state => ({
  location: state.location,
  settings: state.settings,
  suggestion: state.suggestion,
});

const mapDispatchToProps = { getBar, getRestaurant, fetchPark, configSettings, fetchReviews };

export default (connect)(mapStateToProps, mapDispatchToProps)(Buttons);
