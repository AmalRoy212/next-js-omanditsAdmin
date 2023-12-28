import React from 'react';
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from '@/app/ui/dashboard/search/Search';
import Link from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import { fetchDelegates } from '@/app/lib/data';
import PreviewButton from '@/app/ui/dashboard/users/preview/PreviewButton';

async function Delegates({searchParams}) {

  const q  = searchParams?.q || ""
  const page  = searchParams?.page || 1;
  const { count, delegate } = await fetchDelegates(q, page);

  const plainObject = JSON.parse(JSON.stringify(delegate));

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for delegates.."/>
        <PreviewButton delegates={plainObject}/>
        <Link href="/dashboard/delegates/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>Job Title</td>
            <td>Compnay Name</td>
            <td>Role</td>
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
                      alt="" width={30} height={30} className={styles.userImage} />
                    {user.name}
                  </div>
                </td>
                <td>{user.email}</td>
                {/* <td>{user.createdAt?.toString().slice(4, 16)}</td> */}
                <td>{user.jobTitle}</td>
                <td>{user.companyName}</td>
                <td>{user.role}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/delegates/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>view</button>
                    </Link>
                    {/* <button className={`${styles.button} ${styles.delete}`}>delete</button> */}
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

export default Delegates