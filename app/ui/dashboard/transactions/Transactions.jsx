import React from 'react';
import styles from './transactions.module.css'

function Transactions({ delegates }) {

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

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
                    {" "+del?.lastName ? del.lastName : ''}
                    {del.createdAt.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) === formattedDate && <div style={{backgroundColor:"red", borderRadius:"10px", fontSize:"10px", padding:"4px"}}>NEW</div> }
                    {/* {console.log(formattedDate , del.createdAt.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }))} */}
                  </div>
                </td>
                <td>
                  {del.type === "delegate" && <span className={`${styles.status} ${styles.pending}`}>{del.type}</span>}
                  {del.type === "speaker" && <span className={`${styles.status} ${styles.cancelled}`}>{del.type}</span>}
                  {del.type === "sponsor" && <span className={`${styles.status} ${styles.done}`}>{del.type}</span>}
                  
                </td>
                {/* <td>21-dec-2023</td> */}
                <td>{del.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions