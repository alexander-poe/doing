import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Location />
        {/*<Buttons />
        <Suggestion />*/}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
