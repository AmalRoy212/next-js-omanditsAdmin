import React from 'react';
import Cards from '../ui/dashboard/cards/Cards';
import styles from '../ui/dashboard/dashboard.module.css';
import Rightbar from '../ui/dashboard/rightbar/Rightbar';
import Transactions from '../ui/dashboard/transactions/Transactions';
import Chart from '../ui/dashboard/chart/Chart';
import { fetchInitialData } from '../lib/data';
import { updateAllDocs } from '../lib/actions';

async function Dashboard() {

  const { count, delegate } =  await fetchInitialData();
  // await updateAllDocs();  
  const data = [
    {
      title : "Delegates",
      number : count,
      percentage : 0,
      route : "/dashboard/delegates"
    },
    {
      title : "Sponsors",
      number : 0.0,
      percentage : 0,
      route : '/dashboard/sponsors'

    },
    {
      title : "Speakers",
      number : 0.0,
      percentage : 0,
      route : '/dashboard/speakers'

    }
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {data.map((obj,index) => <Cards key={index} data={obj} route={obj.route}/>)}
        </div>
        <Transactions delegates={delegate}/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar notifyDelegate={delegate[0]}/>
      </div>
    </div>
  )
}

export default Dashboard;
