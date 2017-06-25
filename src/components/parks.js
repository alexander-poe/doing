import React, { Component } from 'react';
import fetchPark from '../redux/actions/fetchPark';
import fetchSuggestion from '../redux/actions/fetchSuggestion';

class Parks extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	park_suggestion: ''
    }
  }

  selectPark() {
  	let highest = 0;
  	this.props.dispatch(fetchSuggestion(this.props.items))
  }

  componentDidMount() {
  	this.props.dispatch(fetchPark(12132, 231313))
  }

  render() {

  	const park = this.state.park_suggestion ? 
  		this.state.park_suggestion : null
	
    return (
      <div className="App">
       <h2>{this.props.park}</h2>
      	<input type="submit" onClick={this.selectPark.bind(this)} />
      </div>
    );
  }
 }

  export default Parks;