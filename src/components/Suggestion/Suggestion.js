/* eslint-disable */
import React from 'react';

export default ({ suggestion }) => (
  <div>
    <p>Name: {suggestion.name}</p>
    <p>Rating: {suggestion.rating}</p>
    <p>Vicinity: {suggestion.vicinity}</p>
  </div>
)
