import React from 'react';
import styles from "./user.module.css";
import { fetchSingleDelegate } from '@/app/lib/data';

async function SingleDelegate({ params }) {

  const { id } = params;
  const delegate = await fetchSingleDelegate(id);

  return (
    <div className={styles.container}>
      {/* <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img alt="" src="https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350.jpg"/>
        </div>
        {delegate?.name}
        <br />
        <label style={{marginRight:"1rem"}}>Job Title</label>
        {delegate.jobTitle}
      </div> */}
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>First name</label>
          <input type="email" name="email" value={delegate.name} id="email" />
          <label>Phone</label>
          <input type="phone" name="phone" value={delegate.phone} id="phone" />
          <label>Industry</label>
          <input type="text" name="industry" value={delegate.industry} id="industry" />
          <label>Role</label>
          <input type="text" name="role" value={delegate.role} id="role" />
          <label>Timing of plan</label>
          <input type="text" name="time" value={delegate.timing} id="time" />
        </form>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Last name</label>
          <input type="text" name="lName" value={delegate.lastName} id="lName" />
          <label>Company Name</label>
          <input type="text" name="company" value={delegate.companyName} id="company" />
          <label>Number of Employees</label>
          <input type="text" name="noe" value={delegate.numOfEmployees} id="noe" />
          <label>Country</label>
          <input type="text" name="cntry" value={delegate.country} id="cntry" />
          <label>Budget</label>
          <input type="text" name="budget" value={delegate.budget} id="budget" />
        </form>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>email</label>
          <input type="email" name="email" value={delegate.email} id="email" />
          <label>Job Title</label>
          <input type="text" name="job" value={delegate.jobTitle} id="job" />
          <label>Solution</label>
          <input type="text" name="solution" value={delegate.lookingFor} id="solution" />
          <label>Type</label>
          <input type="text" name="type" value={delegate.type} id="type" />
          <label>Date of registration</label>
          <input type="text" name="date" value={delegate.createdAt?.toString().slice(4, 16)} id="date" />
        </form>
      </div>
    </div>
  )
}

export default SingleDelegate
