import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';
import Buttons from './containers/ButtonsContainer';
import Suggestion from './components/Suggestion/Suggestion';

import setLocation from './redux/actions/setLocation';


class App extends Component {
  render() {
    const { location, suggestion } = this.props;

    return (
      <div className="App">
        <Header />
        {
          !Object.keys(location).length &&
          <Location
            setLocation={this.props.setLocation}
          />
        }
        <Buttons />
        {
          !!Object.keys(suggestion).length &&
          <Suggestion
            suggestion={suggestion}
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

const mapDispatchToProps = { setLocation };

export default connect(mapStateToProps, mapDispatchToProps)(App);
