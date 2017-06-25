/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearSuggestion } from './redux/actions/fetchSuggestion';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';
import Buttons from './containers/ButtonsContainer';
import Suggestion from './components/Suggestion/Suggestion';
import setLocation from './redux/actions/setLocation';
import './App.css';


class App extends Component {
  render() {
    const { location, suggestion, clearSuggestion } = this.props;

    return (
      <div className="App">
        <Header />
        {
          !Object.keys(location).length &&
          <Location
            setLocation={this.props.setLocation}
          />
        }
        {
          (!!Object.keys(location).length && !Object.keys(suggestion).length)
          && <Buttons />
        }
        {
          !!Object.keys(suggestion).length &&
          <Suggestion
            suggestion={suggestion}
            clearSuggestion={clearSuggestion}
          />
        }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location,
  suggestion: state.suggestion,
});

App.propTypes = {
  location: PropTypes.object,
  suggestion: PropTypes.object,
};

const mapDispatchToProps = { setLocation, clearSuggestion };

export default connect(mapStateToProps, mapDispatchToProps)(App);
