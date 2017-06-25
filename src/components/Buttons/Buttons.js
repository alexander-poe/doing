import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => (
  <div>
    <Button
      bsStyle="primary"
      onClick={() => props.getBar(props.location.latitude, props.location.longitude)}
    >Primary</Button>
    <Button
      bsStyle="primary"
      onClick={() => props.fetchPark(props.location.latitude, props.location.longitude)}
    >Primary</Button>

  </div>
);

