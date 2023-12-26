"use client"

import { usePathname } from 'next/navigation';
import styles from './navbar.module.css'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

function Navbar() {

  const pathname = usePathname();


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{pathname.split('/').pop()}</h3>
      </div>
      <div className={styles.menu}>
          <div className={styles.search}>
            <MdSearch/>
            <input type="text" placeholder='seach' className={styles.input} name="" id="" />
          </div>
          <div className={styles.icons}>
            <MdOutlineChat size={20}/>
            <MdNotifications size={20}/>
            <MdPublic size={20} />
          </div>
      </div>
    </div>
  )
}

export default Navbar