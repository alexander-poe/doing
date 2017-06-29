/* eslint-disable */
import React from 'react';
import styles from './Suggestion.css';

export default ({ suggestion, nextSuggestion }) => (
  <div className={styles.suggestion}>
    <img src={suggestion.img} />
    <p>Name: {suggestion.name}</p>
    <p>Rating: {suggestion.rating}</p>
    <p>Vicinity: {suggestion.address}</p>
    <span>
    	<h2 className={styles.inline} onClick={() => nextSuggestion()}>Like</h2>
    	<h2 className={styles.inline} onClick={() => nextSuggestion()}>Trash</h2>
  	</span>
  </div>
);
