import { connect } from 'react-redux';
import Buttons from '../components/Buttons/Buttons';

import getBar from '../redux/actions/fetchBar';
import fetchPark from '../redux/actions/fetchPark';

const mapStateToProps = state => ({
  location: state.location,
});


const mapDispatchToProps = { getBar, fetchPark };

export default (connect)(mapStateToProps, mapDispatchToProps)(Buttons);
