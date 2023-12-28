import React from 'react';
import styles from './cards.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md';

function Cards({data}) {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.number}>{data.number}</span>
        <span className={styles.details}><span className={styles.positive}>{data.percentage} %</span> more than previous week</span>
      </div>
    </div>
  )
}

export default Cards