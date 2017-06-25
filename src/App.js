import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';

import setLocation from './redux/actions/setLocation';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Location
          setLocation={this.props.setLocation}
        />
        {/* <Buttons />
        <Suggestion />*/}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.handleLocation,
});

const mapDispatchToProps = { setLocation };

export default connect(mapStateToProps, mapDispatchToProps)(App);
