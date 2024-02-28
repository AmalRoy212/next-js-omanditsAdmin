import React from 'react';
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from '@/app/ui/dashboard/search/Search';
import Link from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import { fetchAllDelegates, fetchDelegates } from '@/app/lib/data';
import PreviewButton from '@/app/ui/dashboard/users/preview/PreviewButton';
import DeleteButton from '@/app/ui/dashboard/users/delete/DeleteButton';

async function Delegates({searchParams}) {

  const q  = searchParams?.q || ""
  const page  = searchParams?.page || 1;
  const { count, delegate } = await fetchDelegates(q, page);
  const  allDelegates  = await fetchAllDelegates();

  const plainObject = JSON.parse(JSON.stringify(delegate));
  const plainAllDele = JSON.parse(JSON.stringify(allDelegates));

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

  const headings = ["NOS",'First Name', 'Last Name', 'Email', 'Job Title', "company name", 'phone', "Industry", "NO Employees", "Looking For", "Role", 'Country', 'Type', 'Budget', 'Timing', 'Date']

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for delegates.."/>
        <PreviewButton delegates={plainObject} plainAllDele={plainAllDele} q={q} headings={headings} />
        <Link href="/dashboard/delegates/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>Date</td>
            {/* <td>Compnay Name</td> */}
            {/* <td>Role</td>  */}
            <td>Checkin</td>
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
                    {user.name} {" "}{" "}
                    {user.lastName}
                    {user.createdAt.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) === formattedDate && <div style={{backgroundColor:"red", borderRadius:"10px", fontSize:"10px", padding:"4px"}}>NEW</div> }
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                {/* <td>{user.jobTitle}</td>
                <td>{user.companyName}</td> */}
                {/* <td>{user.role}</td> */}
                <td style={{display:"flex", justifyContent:"center"}}>
                  <h2>{user.checkin ? <>
                      <div style={{width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"green"}}></div>
                  </> : <>
                    <div style={{width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"red"}}></div>
                  </>}</h2>
                </td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/delegates/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>view</button>
                    </Link>
                    <DeleteButton />
                    {/* <button onClick={() => handleDelete(user._id)} className={`${styles.button} ${styles.delete}`}>delete</button> */}
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