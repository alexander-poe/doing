/* eslint react/prop-types: 0 */
import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ location, getBar, getRestaurant, fetchPark }) => (
  <div>
    <Button
      bsStyle="primary"
      onClick={() => getBar(location.latitude, location.longitude)}
    >Primary</Button>
    <Button
      bsStyle="primary"
      onClick={() => fetchPark(location.latitude, location.longitude)}
    >Primary</Button>
    <Button
      bsStyle="primary"
      onClick={() => getRestaurant(location.latitude, location.longitude)}
    >Primary</Button>

  </div>
);

