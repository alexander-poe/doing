import { connect } from 'react-redux';
import Buttons from '../components/Buttons/Buttons';

import getBar from '../redux/actions/fetchBar';
import getRestaurant from '../redux/actions/fetchRestaurant';
import fetchPark from '../redux/actions/fetchPark';
import configSettings from '../redux/actions/configSettings';

const mapStateToProps = state => ({
  location: state.location,
  settings: state.settings
});

const mapDispatchToProps = { getBar, getRestaurant, fetchPark, configSettings };

export default (connect)(mapStateToProps, mapDispatchToProps)(Buttons);
