import React from 'react';
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from '@/app/ui/dashboard/search/Search';
import Link from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import { fetchDelegates } from '@/app/lib/data';

async function Users({searchParams}) {

  const q  = searchParams?.q || ""
  const page  = searchParams?.page || 1;
  const { count, delegate } = await fetchDelegates(q, page);

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
          {delegate.map((user) => {
            return(
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                    <img src={user.img || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"}
                      alt="" width={40} height={40} className={styles.userImage} />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "Active" : "Passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>view</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>delete</button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Pagination count={count}/>
    </div>
  )
}

export default Users