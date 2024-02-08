import React from 'react';
import styles from "./nom.module.css";
import { fetchSingleNominee } from '@/app/lib/data';

async function SingelNominee({ params }) {

  const { id } = params;
  const nominee = await fetchSingleNominee(id)

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Nominee name</label>
          <input type="text" name="name" value={nominee.refName} id="name" />
          <label>Nominee email</label>
          <input type="email" name="email" value={nominee.refEmail} id="email" />
          <label>Nominee phone</label>
          <input type="phone" name="phone" value={nominee.refPhone} id="phone" />
          <label>Nominee company name</label>
          <input type="text" name="industry" value={nominee.refCompanyName} id="industry" />
        </form>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Nominee job Title</label>
          <input type="text" name="industry" value={nominee.refJobTitle} id="industry" />
          <label>Reffered by</label>
          <input type="text" name="industry" value={nominee.refferedBy} id="industry" />
          <label>Refference email</label>
          <input type="text" name="industry" value={nominee.refferedEmail} id="industry" />
          <label>Date</label>
          <input type="text" name="industry" value={nominee.createdAt?.toString().slice(4, 16)} id="industry" />
        </form>
      </div>
    </div>
  )
}

export default SingelNominee
