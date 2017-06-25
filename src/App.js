import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPark from './redux/actions/fetchPark';
import fetchSuggestion from './redux/actions/fetchSuggestion';
import { getBar } from './redux/actions/fetchBar';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.getSuggestion = this.getSuggestion.bind(this)
  }

  componentDidMount() {
    this.props.fetchPark(12132, 231313)
  }

  getSuggestion(collection) {
    this.props.fetchSuggestion(collection)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input type="text" onClick={() => this.getSuggestion(this.props.parks)} />
          <button onClick={() => this.props.getBar(45.507704, -122.623172)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
      console.log(state.handleSuggestions)
      if (true) {
        return {
          parks: state.handleParks.parks,
          current_suggestion: state.handleSuggestions
        }
      } else {
        return {
          parks: [],
          current_suggestion: []
        }
      }


};

const mapDispatchToProps = { getBar, fetchPark, fetchSuggestion };

export default connect(mapStateToProps, mapDispatchToProps)(App);
