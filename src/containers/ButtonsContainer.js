import { connect } from 'react-redux';
import Buttons from '../components/Buttons/Buttons';

import getBar from '../redux/actions/fetchBar';



const mapStateToProps = (state, ownProps) => {

  return {

  };
};

const mapDispatchToProps = (dispatch) => ({
    toggleOne (song, list) {
      dispatch(toggleSong(song, list));
    }
  });

export default (connect)(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons);
