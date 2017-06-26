import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './card.css';

class Card extends Component {
  render() {
    return (
      <div idName={styles.image}>
        <img className={styles.image} src={this.props.image} alt={this.props.title} />
          <div className={styles.cardText}>
            <h4>{this.props.title}</h4>
            <p>{this.props.reviews}</p>
            <br />
            <a href={this.props.link}>yardhouse.com</a>
            <p>{this.props.address}</p>
            <p>{this.props.number}</p>
            <br />
          </div>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Card.defaultProps = {
  link: null,
};

export default Card;

