import React from 'react';
import styles from './header.css';

export default () => (
  <div className={styles.navBar}>
    <div className={styles.navBrand}>
      <h2>Are you silly?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      <a href="/">
        <div className="logoBG">
          <img
            alt="Logo"
            src={`${process.env.PUBLIC_URL}/sendit_logo.png`}
            className={styles.logo}
          />
        </div>
      </a>
      <h2>Im still gonna send it...</h2>
    </div>
  </div>
);
