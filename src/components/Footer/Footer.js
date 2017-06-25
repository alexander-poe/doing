import React from 'react';

const styles = {
  footer: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    height: 60,
    backgroundColor: 'lightgrey',
  },
  footerBlock: {
    margin: 20,
  },
};

export default () => (
  <div id="footer" style={styles.footer}>
    <div className="container">
      <p className="footer-block" style={styles.footerBlock}>Footer</p>
    </div>
  </div>
);
