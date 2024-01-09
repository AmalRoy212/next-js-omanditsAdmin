import React from "react";
import styles from "./table.module.css";
import Link from "next/link";
import DeleteButton from "../users/delete/DeleteButton";
import Search from "../search/Search";
import PreviewButton from "../users/preview/PreviewButton";

function Table({ headings, data }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for delegates.."/>
        {/* <PreviewButton delegates={plainObject} plainAllDele={plainAllDele} q={q} /> */}
        {/* <Link href="/dashboard/delegates/add">
          <button className={styles.addButton}>Add New</button>
        </Link> */}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {headings.map((head, index) => (
              <td key={index}>{head}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((nom, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <img
                    src={
                      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                    }
                    alt=""
                    width={30}
                    height={30}
                    className={styles.userImage}
                  />
                  {nom.refName}
                  {nom.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  }) === formattedDate && (
                    <div
                      style={{
                        backgroundColor: "red",
                        borderRadius: "10px",
                        fontSize: "10px",
                        padding: "4px",
                      }}
                    >
                      NEW
                    </div>
                  )}
                </div>
              </td>
              <td>{nom.refEmail}</td>
              <td>{nom.refPhone}</td>
              <td>{nom.refCompanyName}</td>
              <td>{nom.refJobTitle}</td>
              <td>{nom.refferedBy}</td>
              <td>{nom.refferedEmail}</td>
              <td>
                {/* <div className={styles.buttons}>
                        <Link href={`/dashboard/delegates/`}>
                        <button className={`${styles.button} ${styles.view}`}>view</button>
                        </Link>
                        <DeleteButton />
                        <button onClick={() => handleDelete(user._id)} className={`${styles.button} ${styles.delete}`}>delete</button>
                    </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
