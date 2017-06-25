import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';
import Buttons from './containers/ButtonsContainer';

import setLocation from './redux/actions/setLocation';


class App extends Component {
  render() {
    const location = this.props.location;

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
        {/*<Suggestion />*/}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location,
});

const mapDispatchToProps = { setLocation };

export default connect(mapStateToProps, mapDispatchToProps)(App);
