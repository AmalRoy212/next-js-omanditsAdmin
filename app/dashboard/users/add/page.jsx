import React from 'react';
import styles from "../../../ui/dashboard/users/add/addUsers.module.css";
import { addUsers } from '@/app/lib/actions';

function AddUser() {
  return (
    <div className={styles.container}>
      <form action={addUsers} className={styles.form}>    
        <input type="text" placeholder='username' name="username" required id="" />
        <input type="email" placeholder='email' name="email" required id="" />
        <input type="password" placeholder='password' name="password" required id="" />
        <input type="phone" placeholder='phone' name="phone" id="" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" id="address"  rows="16" placeholder='Address'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUser
