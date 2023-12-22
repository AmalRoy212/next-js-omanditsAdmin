import React from 'react';
import styles from "./serach.module.css";
import { MdSearch } from 'react-icons/md';

function Search({placeholder}) {
  return (
    <div className={styles.container}>
      <MdSearch/>
      <input type="text" placeholder={placeholder} className={styles.input} name="" id="" />
    </div>
  )
}

export default Search
