/* eslint-disable */
import React from 'react';
import styles from './Suggestion.css';
import StarRating from './StarRating';

export default ({ suggestion }) => {
  console.log(suggestion, 'suggestion!!');
  let g = suggestion.hours.open_now;
  let r = g ? 'OPEN NOW' : 'CLOSED';
  let rating = Math.round(suggestion.rating);
  
  console.log(rating)
  
  console.log(rating, 'herer')
  return (
  <div className={styles.suggestion}>
    <div className={styles.imgContainer}>
      <div className={styles.imgBox}>
        <img src={suggestion.img} />
      </div>  
      <div className={styles.photoFooter}>
        <div className={styles.openSection}>
          <h2 className={styles.openNow}>{r}</h2>
          <StarRating stars={rating} />
        </div>
        <div className={styles.suggestionInfo}>
          <p className={styles.title}>{suggestion.name}</p>
          <p className={styles.address}>{suggestion.address}</p>
        </div>
      </div>
    </div>  
  </div>
  )
};
