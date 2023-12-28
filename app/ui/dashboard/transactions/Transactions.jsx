import React from 'react';
import styles from './transactions.module.css'

function Transactions({ delegates }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Updates</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            {/* <th>Date</th> */}
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {delegates.map((del) => {
            return (
              <tr key={del._id}>
                <td>
                  <div className={styles.user}>
                    <img className={styles.userImage} width={50} height={50} src="https://i.pinimg.com/564x/3a/57/94/3a57945cf1e5c4e102df69024afe4942.jpg" alt="" />
                    {del.name}
                  </div>
                </td>
                <td>
                  <span className={`${styles.status} ${styles.pending}`}>Delegate</span>
                </td>
                {/* <td>21-dec-2023</td> */}
                <td>{del.email}</td>
              </tr>
            )
          })}

          {/* <tr>
            <td>
              <div className={styles.user}>
                <img className={styles.userImage} width={50} height={50} src="https://i.pinimg.com/564x/3a/57/94/3a57945cf1e5c4e102df69024afe4942.jpg" alt="" />
                Amal
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>21-dec-2023</td>
            <td>amal@gmail.com</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <img className={styles.userImage} width={50} height={50} src="https://i.pinimg.com/564x/3a/57/94/3a57945cf1e5c4e102df69024afe4942.jpg" alt="" />
                Amal
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>21-dec-2023</td>
            <td>amal@gmail.com</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <img className={styles.userImage} width={50} height={50} src="https://i.pinimg.com/564x/3a/57/94/3a57945cf1e5c4e102df69024afe4942.jpg" alt="" />
                Amal
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>21-dec-2023</td>
            <td>amal@gmail.com</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions