import React from 'react';
import styles from './header.css';

export default () => (
  <div className={styles.navBar}>
    <div className={styles.navBrand}>
      <p>Are you silly?</p>
      <a href="/">
        <img
          alt="Logo"
          src={`${process.env.PUBLIC_URL}/sendit_logo.png`}
          width="200px"
          className={styles.logo}
        />
      </a>
      <p>Im still gonna send it...</p>
    </div>
  </div>
);
