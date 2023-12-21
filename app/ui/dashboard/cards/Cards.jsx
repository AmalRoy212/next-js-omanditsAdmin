import React from 'react';
import styles from './cards.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md';

function Cards() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
        <span className={styles.title}>Total delegates</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.details}><span className={styles.positive}>12%</span>more than previous week</span>
      </div>
    </div>
  )
}

export default Cards