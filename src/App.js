import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPark from './redux/actions/fetchPark';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  doAction() {
    this.props.dispatch(fetchPark(12313, 123123))
  }  

  render() {
    return (
      <div className="App">
        <div onClick={this.doAction.bind(this)} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
