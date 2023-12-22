import React from 'react';
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Genfinity</div>
      <div className={styles.text}> all the right reserved</div>
    </div>
  )
}

export default Footer
