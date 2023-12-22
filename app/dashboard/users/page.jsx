import React from 'react';
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from '@/app/ui/dashboard/search/Search';
import Link from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';

function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for delegates.."/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" 
                  alt="" width={40} height={40} className={styles.userImage}/>
                username
              </div>
            </td>
            <td>user@gmail.com</td>
            <td>12/10/2023</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/users/test'>
                  <button className={`${styles.button} ${styles.view}`}>view</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination/>
    </div>
  )
}

export default Users