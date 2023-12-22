import React from 'react';
import styles from "@/app/ui/dashboard/users/SingleUser/singleUser.module.css";
import Image from 'next/image';

function SingleUser() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img alt="" src="https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350.jpg"/>
        </div>
        Amal Roy
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder='Amal Roy' id="" />
          <label>email</label>
          <input type="email" name="email" placeholder='Amal@gmail.com' id="" />
          <label>Password</label>
          <input type="password" name="password" placeholder='' id="" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder='873498483' id="" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder='Adress' id="" />
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="IsActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUser
