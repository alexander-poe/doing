/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import styles from './StarRating.css';

class StarRating extends Component {
  render() {
    let stars = <i className="fa fa-star" aria-hidden="true" />;
    if (this.props.stars === 1) {
      stars = <i className="fa fa-star" aria-hidden="true" />;
    } else if (this.props.stars === 2) {
      stars = (<span>
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </span>);
    } else if (this.props.stars === 3) {
      stars = (<span>
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </span>);
    } else if (this.props.stars === 4) {
      stars = (<span>
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </span>);
    } else if (this.props.stars === 5) {
      stars = (<span>
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </span>);
    }
    return (
      <div className={styles.starsParent}>
        { stars }
      </div>
    );
  }
}

export default StarRating;

