import React from 'react';
import styles from "@/app/ui/dashboard/users/SingleUser/singleUser.module.css";
// import { useParams } from 'next/navigation';
import { fetchSingleDelegate } from '@/app/lib/data';

async function SingleDelegate({ params }) {

  const { id } = params;
  const delegate = await fetchSingleDelegate(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img alt="" src="https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350.jpg"/>
        </div>
        {delegate?.name}
        <br />
        <label style={{marginRight:"1rem"}}>Job Title</label>
        {delegate.jobTitle}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          {/* <label>Username</label>
          <input type="text" name="name" value={delegate.name} id="name" /> */}
          <label>email</label>
          <input type="email" name="email" value={delegate.email} id="email" />
          <label>Phone</label>
          <input type="phone" name="phone" value={delegate.phone} id="phone" />
          <label>Company Name</label>
          <input type="text" name="password" value={delegate.companyName} id="password" />
          <label>Role</label>
          <input type="text" name="password" value={delegate.role} id="password" />

          {/* <textarea type="text" name="address" value={delegate.name} id="address" /> */}
          {/* <button type='submit'>Update</button> */}
        </form>
      </div>
    </div>
  )
}

export default SingleDelegate
