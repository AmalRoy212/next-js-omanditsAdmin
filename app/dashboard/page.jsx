import React from 'react';
import Cards from '../ui/dashboard/cards/Cards';
import styles from '../ui/dashboard/dashboard.module.css';
import Rightbar from '../ui/dashboard/rightbar/Rightbar';
import Transactions from '../ui/dashboard/transactions/Transactions';
import Chart from '../ui/dashboard/chart/Chart';

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard;
