import React from 'react'
import styles from "./pagination.module.css";
function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>previous</button>
      <button className={styles.button}>next</button>
    </div>
  )
}

export default Pagination
