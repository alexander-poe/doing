/* eslint react/prop-types: 0 */
import React from 'react';
import styles from './footer.css';

export default () => (
  <div id="footer" className={styles.footer}>
    <div className={styles.leftFooter}>
      <a href="http://www.larryenticer69.com/">God Bless Larry Enticer</a>
    </div>

    <div className={styles.rightFooter}>
      <a href="https://github.com/Hackbit/reactriot2017-pdx/">Source Code</a>
      <a href="https://reactriot.com/">About</a>
      <a href="mailto:kylemh.email@gmail.com">Contact</a>
    </div>
  </div>
);
