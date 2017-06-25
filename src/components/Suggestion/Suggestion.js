import React from 'react';

export default ({ suggestion, clearSuggestion }) => (
  <div>
    <p>Name: {suggestion.name}</p>
    <p>Rating: {suggestion.rating}</p>
    <p>Vicinity: {suggestion.vicinity}</p>
    <button onClick={() => clearSuggestion()}>Clear Suggestions</button>
  </div>
);
