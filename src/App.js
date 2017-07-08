/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearSuggestion } from './redux/actions/fetchSuggestion';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Location from './components/Location/Location';
import Buttons from './containers/ButtonsContainer';
import Suggestion from './components/Suggestion/Suggestion';
import setLocation from './redux/actions/setLocation';
import './App.css';


class App extends Component {
  render() {
  const { location, suggestion, card, clearSuggestion, settings } = this.props;

    return (
      <div className="App">
        <Header />
        {
          !Object.keys(location).length &&
          <Location
            setLocation={this.props.setLocation}
          />
        }
        <Buttons
          settings={settings}
        />
        {
          !!Object.keys(suggestion).length &&
          <Suggestion
            suggestion={suggestion}
            clearSuggestion={clearSuggestion}
          />
        }
        <Card
          image="http://www.newschoolbeer.com/wp-content/uploads/2015/03/yardhouse_logo_lr.jpg"
          title="Yard House"
          address="Address"
          reviews="Reviews"
          number="888-888-888"
          link="https://yardhouse.com/home"
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location,
  suggestion: state.suggestion,
  card: state.card,
  settings: state.settings
});;

App.propTypes = {
  location: PropTypes.object,
  suggestion: PropTypes.object,
};

const mapDispatchToProps = { setLocation, clearSuggestion };

export default connect(mapStateToProps, mapDispatchToProps)(App);

