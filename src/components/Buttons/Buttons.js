/* eslint react/prop-types: 0 */
import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Buttons.css';

export default ({ location, getBar, getRestaurant, fetchPark }) => (
  <div className={styles.buttons}>
    <Button
      bsStyle="primary"
      className={styles.btn_mod}
      onClick={() => getBar(location.latitude, location.longitude)}
    >Drink</Button>
    <Button
      className={styles.btn_mod}
      bsStyle="primary"
      onClick={() => fetchPark(location.latitude, location.longitude)}
    >Nature</Button>
    <Button
      className={styles.btn_mod}
      bsStyle="primary"
      onClick={() => getRestaurant(location.latitude, location.longitude)}
    >Food</Button>

  </div>
);

