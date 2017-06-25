import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResultCard extends Component {
  render() {
    return (
    <div className={styles.Res} >
      <img className={styles.image} src={this.props.image} alt={this.props.title} />
        <div className={styles.cardContainer}>
          <div className={styles.cardText}>
            <h2>{this.props.title}</h2>
            <p>{this.props.cardText}</p>
            {this.props.link && <LinkButton text={this.props.buttonText} link={this.props.link} />}
          </div>
      </div>
    </div>
    );
  }
}

ResultCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  link: PropTypes.string
};

ResultCard.defaultProps = {
  link: null,
  buttonText: null
};
