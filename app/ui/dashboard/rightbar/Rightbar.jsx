import React from 'react';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <img width={150} height={150} src="/images/meetings.png" alt="" className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>New Delegate</span>
          <h3 className={styles.title}>the notification details will go here </h3>
          <span className={styles.subtitle}>4 minutes ago</span>
          <p className={styles.dis}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est omnis ducimus quisquam
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Know more 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar