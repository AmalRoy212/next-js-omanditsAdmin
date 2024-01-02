import React from 'react';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import Link from "next/link";

function Rightbar({notifyDelegate}) {

  function setTime(){

    const now = new Date();
    const time = new Date(notifyDelegate.createdAt);

    const timeDiff = now - time;
    const minutesAgo = Math.floor(timeDiff / (1000 * 60));
    
    return minutesAgo

  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <img width={150} height={150} src="/images/meetings.png" alt="" className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>New {notifyDelegate.type}</span>
          <h3 className={styles.title}>{`${notifyDelegate.name} is submitted a new form as ${notifyDelegate.type}`}</h3>
          <span className={styles.subtitle}>{setTime()} minutes ago</span>
          <p className={styles.dis}>
            {`Mr. ${notifyDelegate.name}, working as a ${notifyDelegate.jobTitle} in ${notifyDelegate.companyName}, Who is ${notifyDelegate.role}`}
          </p>
          <Link href={"/dashboard/delegates"}>
            <button className={styles.button}>
              <MdPlayCircleFilled/>
              Know more 
            </button> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Rightbar