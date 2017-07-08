/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import styles from './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false,
      cost: 0,
      distance: 0
    };
    this.handleChangeCost = this.handleChangeCost.bind(this);
    this.handleChangeDistance = this.handleChangeDistance.bind(this);
  }
  handleChangeCost(e) {
    this.setState({ cost: e.target.value });
  }
  handleChangeDistance(e) {
    this.setState({ distance: e.target.value });
  }
  render() {
    return (
      <div className={styles.temp}>
        <button
          onClick={() => this.props.configSettings({
            cost: this.state.cost,
            distance: this.state.distance
          })}
        >settings</button>
        <input
          placeholder="cost"
          onChange={this.handleChangeCost}
        />
        <input
          placeholder="distance"
          onChange={this.handleChangeDistance}
        />
      </div>
    );
  }
}

export default Settings;

