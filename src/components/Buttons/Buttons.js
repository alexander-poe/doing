import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => (
  <div>
    <Button
      bsStyle="primary"
      onClick={() => props.getBar()}
    >Primary</Button>
    <Button
      bsStyle="primary"
      onClick={() => props.fetchPark()}
    >Primary</Button>

  </div>
);

