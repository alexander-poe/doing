import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './card.css';

class Card extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <img className={styles.image} src={this.props.image} alt={this.props.title} />
          <div className={styles.cardText}>
            <h4>{this.props.title}</h4>
            <p>{this.props.cardText}</p>
            <br />
            <a href={this.props.link}>Visit Website</a>
          </div>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Card.defaultProps = {
  link: null,
};

export default Card;
